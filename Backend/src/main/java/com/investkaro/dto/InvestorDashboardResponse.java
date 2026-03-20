package com.investkaro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor
public class InvestorDashboardResponse {

    private Double totalInvested;
    private Long totalStartups;
    private Double largestInvestment;

}