package com.investkaro.service.Impl;

import com.investkaro.dto.RegisterRequest;
import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.InvestorProfile;
import com.investkaro.entity.Role;
import com.investkaro.entity.User;
import com.investkaro.repository.FounderRepository;
import com.investkaro.repository.InvestorRepository;
import com.investkaro.repository.UserRepository;
import com.investkaro.security.JwtService;
import com.investkaro.service.AuthService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final FounderRepository founderRepository;
    private final InvestorRepository investorRepository;

    public AuthServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, FounderRepository founderRepository, InvestorRepository investorRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.founderRepository = founderRepository;
        this.investorRepository = investorRepository;
    }

    @Override
    public User register(RegisterRequest request) {
        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setLocation(request.getLocation());
        user.setRole(request.getRole());

        User savedUser = userRepository.save(user);

        // Create founder profile automatically
        if (savedUser.getRole() == Role.FOUNDER) {

            FounderProfile founder = new FounderProfile();
            founder.setUser(savedUser);
            founderRepository.save(founder);
        }
        if (savedUser.getRole() == Role.INVESTOR) {

            InvestorProfile investor = new InvestorProfile();
            investor.setUser(savedUser);

            investorRepository.save(investor);
        }

        return savedUser;
    }

    @Override
    public String login(String email, String password) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        if(!passwordEncoder.matches(password , user.getPassword())){
            throw new RuntimeException("Invalid password");
        }
        return jwtService.generateToken(user.getEmail(),user.getRole().name());
    }
}
