package com.investkaro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public String test() {
        return "API Secured Successfully";
    }

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "Admin Successfully";
    }

    @GetMapping("/founder/dashboard")
    public String founderDashboard() {
        return "founder Successfully";
    }

    @GetMapping("/investor/dashboard")
    public String investorDashboard() {
        return "Investor Successfully";
    }
}
