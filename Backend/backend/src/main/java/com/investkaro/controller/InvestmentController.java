package com.investkaro.controller;

import com.investkaro.service.InvestmentService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/investor/investments")
public class InvestmentController {
    private final InvestmentService investmentService;

    public InvestmentController(InvestmentService investmentService) {
        this.investmentService = investmentService;
    }

    @PostMapping("/{startupId}")
    public String invest(@PathVariable Long startupId, @RequestParam Double amount , Authentication authentication){
        String email = authentication.getName();
        investmentService.invest(startupId , amount , email);
        return "Investment Is :";
    }
}
