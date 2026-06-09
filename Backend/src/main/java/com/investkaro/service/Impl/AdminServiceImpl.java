package com.investkaro.service.Impl;

import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import com.investkaro.repository.InterestRepository;
import com.investkaro.repository.InvestmentRepository;
import com.investkaro.repository.StartupRepository;
import com.investkaro.repository.UserRepository;
import com.investkaro.service.AdminService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;
    private final StartupRepository startupRepository;
    private final InterestRepository interestRepository;
    private final InvestmentRepository investmentRepository;

    public AdminServiceImpl( UserRepository userRepository, StartupRepository startupRepository, InterestRepository interestRepository, InvestmentRepository investmentRepository) {
        this.userRepository = userRepository;
        this.startupRepository = startupRepository;
        this.interestRepository = interestRepository;
        this.investmentRepository = investmentRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Startup> getAllStartups() {
        return startupRepository.findAll();
    }

    @Transactional
    public void deleteStartupByAdmin(Long id) {

        Startup startup = startupRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Startup not found"));

        // delete child data first
        interestRepository.deleteByStartupId(id);
        investmentRepository.deleteByStartupId(id);

        startupRepository.delete(startup);
    }
}
