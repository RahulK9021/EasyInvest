package com.investkaro.service.Impl;

import com.investkaro.entity.Interest;
import com.investkaro.entity.InvestorProfile;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import com.investkaro.repository.InterestRepository;
import com.investkaro.repository.InvestorRepository;
import com.investkaro.repository.StartupRepository;
import com.investkaro.repository.UserRepository;
import com.investkaro.service.InterestService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class InterestServiceImpl implements InterestService {

    private final InterestRepository interestRepository;
    private final InvestorRepository investorRepository;
    private final StartupRepository startupRepository;
    private final UserRepository userRepository;

    public InterestServiceImpl(
            InterestRepository interestRepository,
            InvestorRepository investorRepository,
            StartupRepository startupRepository,
            UserRepository userRepository) {

        this.interestRepository = interestRepository;
        this.investorRepository = investorRepository;
        this.startupRepository = startupRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void markInterest(Long startupId, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        InvestorProfile investor = investorRepository.findByUser(user)
                .orElseThrow(() -> new RuntimeException("Investor profile not found"));

        Startup startup = startupRepository.findById(startupId)
                .orElseThrow(() -> new RuntimeException("Startup not found"));

        Interest interest = new Interest();
        interest.setInvestor(investor);
        interest.setStartup(startup);
        interest.setCreatedAt(LocalDateTime.now());

        interestRepository.save(interest);
    }
}
