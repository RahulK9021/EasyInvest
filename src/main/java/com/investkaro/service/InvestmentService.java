package com.investkaro.service;

import com.investkaro.dto.InvestorDashboardResponse;

import java.util.List;
import java.util.Map;

public interface InvestmentService {
    Map<String, Object> invest(Long startupId, Double amount, String email);

    InvestorDashboardResponse getInvestorDashboard(Long investorId);
}
