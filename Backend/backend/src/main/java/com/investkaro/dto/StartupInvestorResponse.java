package com.investkaro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StartupInvestorResponse {
    private String investorName;
    private Double amount;


}
