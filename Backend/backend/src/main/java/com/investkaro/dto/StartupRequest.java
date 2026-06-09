package com.investkaro.dto;

import lombok.Data;

@Data
public class StartupRequest {

    private String companyName;

    private String businessModel;

    private Integer foundedYear;

    private Integer teamSize;

    private String problem;

    private String solution;

    private String targetMarket;

    private String usp;

    private String competitors;

    private Double revenue;

    private Double burnRate;

    private Double cac;

    private Double ltv;

    private Double totalFunding;

    private Double amountRequired;

    private Double equityOffered;

    private Double valuation;

    private Long industryId;

    private String email;

}
