package com.investkaro.service.Impl;

import com.investkaro.entity.Investment;
import com.investkaro.entity.InvestorProfile;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import com.investkaro.repository.InvestmentRepository;
import com.investkaro.repository.InvestorRepository;
import com.investkaro.repository.StartupRepository;
import com.investkaro.repository.UserRepository;
import com.investkaro.service.InvestmentService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
@Service
public class InvestmentServiceImpl implements InvestmentService {
    private final InvestmentRepository investmentRepository;
    private final StartupRepository startupRepository;
    private final InvestorRepository investorRepository;
    private final UserRepository userRepository;

    public InvestmentServiceImpl(
            InvestmentRepository investmentRepository,
            StartupRepository startupRepository,
            InvestorRepository investorRepository,
            UserRepository userRepository) {

        this.investmentRepository = investmentRepository;
        this.startupRepository = startupRepository;
        this.investorRepository = investorRepository;
        this.userRepository = userRepository;
    }
    @Override
    public void invest(Long startupId, Double amount, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        InvestorProfile investor = investorRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Investor not found"));

        Startup startup = startupRepository.findById(startupId)
                .orElseThrow(() -> new RuntimeException("Startup not found"));

        boolean alreadyInvested =
                investmentRepository.existsByInvestor_IdAndStartup_Id(
                        investor.getId(),
                        startupId
                );

        if (alreadyInvested) {
            throw new RuntimeException("You already invested in this startup");
        }

        Investment  investment = new Investment();
        investment.setAmount(amount);
        investment.setInvestor(investor);
        investment.setStartup(startup);
        investment.setCreatedAt(LocalDateTime.now());

        investmentRepository.save(investment);
    }
}
