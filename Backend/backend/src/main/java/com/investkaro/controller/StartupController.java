package com.investkaro.controller;

import com.investkaro.dto.FundingProgressDTO;
import com.investkaro.dto.StartupRequest;
import com.investkaro.dto.StartupResponse;
import com.investkaro.entity.Startup;
import com.investkaro.service.InvestmentService;
import com.investkaro.service.StartupService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/founder/startups")
public class StartupController {
    private final StartupService startupService;
    private final InvestmentService investmentService;

    public StartupController(StartupService startupService, InvestmentService investmentService) {
        this.startupService = startupService;
        this.investmentService = investmentService;
    }

    @PostMapping
    public Startup createStartup(@RequestBody StartupRequest request , Authentication authentication){
       String email = authentication.getName();
       return startupService.createStartup(request , email);
    }


    @GetMapping
    public List<Startup> getStartups(Authentication authentication){
        String email = authentication.getName();
        return startupService.getAllStartups(email);
    }

    @GetMapping("progress/{startupId}")
    @PreAuthorize("hasRole('FOUNDER') or hasRole('INVESTOR')")
    public FundingProgressDTO getFundingProgress(@PathVariable Long startupId){
        return startupService.getFundingProgress(startupId);
    }

    @GetMapping("/{startupId}/investors")
    public ResponseEntity<?> getStartupInvestors(@PathVariable Long startupId){
        return ResponseEntity.ok(startupService.getInvestors(startupId));
    }
}
