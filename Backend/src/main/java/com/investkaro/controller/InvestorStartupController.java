package com.investkaro.controller;

import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import com.investkaro.repository.FounderRepository;
import com.investkaro.repository.StartupRepository;
import com.investkaro.repository.UserRepository;
import com.investkaro.service.StartupService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/investor/startups")
public class InvestorStartupController {

    private final StartupService startupService;

    public InvestorStartupController(StartupService startupService) {
        this.startupService = startupService;
    }

    @GetMapping
    public List<Startup> getAllStartups() {
        return startupService.getAllStartups();
    }

    @GetMapping("/industry/{industryId}")
    public List<Startup> getByIndustry(@PathVariable Long industryId){
        return startupService.findByIndustry_Id(industryId);
    }

    @GetMapping ("/range")
    public List<Startup> getInvestmentRange(@RequestParam Double min ,@RequestParam Double max ){
        return startupService.findByInvestmentRange(min , max);
    }

    @GetMapping("/filter")
    public List<Startup> getInvestmentByFilter(@RequestParam Long industryId , @RequestParam Double min ,@RequestParam Double max){
        return startupService.findByIndustry_IdAndAmountRequiredBetween(industryId , min , max);
    }
}
