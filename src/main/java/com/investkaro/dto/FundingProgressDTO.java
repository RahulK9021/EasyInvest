package com.investkaro.dto;

import lombok.Data;

@Data
public class FundingProgressDTO {
    private Long startupId;
    private Double amountRequired;
    private Double amountRaised;
    private Double progressPercentage;
}
