package com.investkaro.service;

import com.investkaro.dto.InvestorDashboardResponse;

import java.util.List;

public interface InvestmentService {
    void invest(Long startupId , Double amount , String email);

    InvestorDashboardResponse getInvestorDashboard(Long investorId);
}
