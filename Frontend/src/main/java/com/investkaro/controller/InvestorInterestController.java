package com.investkaro.controller;

import com.investkaro.service.InterestService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/investor/interest")
public class InvestorInterestController {

    private final InterestService interestService;

    public InvestorInterestController(InterestService interestService) {
        this.interestService = interestService;
    }

    @PostMapping("/{startupId}")
    public String markInterest(@PathVariable Long startupId , Authentication authentication){
        String email = authentication.getName();
        interestService.markInterest(startupId , email);
        return "Interest Recorded";
    }
}
