package com.investkaro.controller;

import com.investkaro.dto.InvestorDashboardResponse;
import com.investkaro.dto.StartupResponse;
import com.investkaro.entity.InvestorProfile;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import com.investkaro.repository.InvestorRepository;
import com.investkaro.repository.UserRepository;
import com.investkaro.service.InvestmentService;
import com.investkaro.service.StartupService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/investor/startups")
public class InvestorStartupController {

    private final StartupService startupService;
    private  final UserRepository userRepository;
    private final InvestmentService investmentService;
    private final InvestorRepository investorRepository;

    public InvestorStartupController(StartupService startupService, UserRepository userRepository, InvestmentService investmentService, InvestorRepository investorRepository) {
        this.startupService = startupService;
        this.userRepository = userRepository;
        this.investmentService = investmentService;
        this.investorRepository = investorRepository;
    }

    @GetMapping
    public List<StartupResponse> getAllStartups() {
        return startupService.getAllStartups();
    }

    @GetMapping("/industry/{industryId}")
    public List<StartupResponse> getByIndustry(@PathVariable Long industryId){
        return startupService.findByIndustry_Id(industryId);
    }

    @GetMapping ("/range")
    public List<StartupResponse> getInvestmentRange(@RequestParam Double min ,@RequestParam Double max ){
        return startupService.findByInvestmentRange(min , max);
    }

    @GetMapping("/filter")
    public List<StartupResponse> getInvestmentByFilter(@RequestParam Long industryId , @RequestParam Double min ,@RequestParam Double max){
        return startupService.findByIndustry_IdAndAmountRequiredBetween(industryId , min , max);
    }

    @GetMapping("/dashboard")
    public ResponseEntity<?> getInvestorDashboard(Authentication authentication) {

        User user = userRepository
                .findByEmail(authentication.getName())
                .orElseThrow();

        InvestorProfile investor = investorRepository
                .findByUser(user)
                .orElseThrow();

        InvestorDashboardResponse dashboard =
                investmentService.getInvestorDashboard(investor.getId());

        return ResponseEntity.ok(dashboard);
    }

    @GetMapping("/top-funded")
    public ResponseEntity<?> getTopFundedStartup(){
        return ResponseEntity.ok(startupService.getTopFundedStartups());
    }
}
