package com.investkaro.dto;

import lombok.Data;

@Data
public class StartupResponse {
    private Long id;
    private String companyName;
    private String businessModel;
    private int foundedYear;
    private int teamSize;
    private String problem;
    private String solution;
    private String targetMarket;
    private String usp;
    private String competitors;
    private double revenue;
    private double burnRate;
    private double cac;
    private double ltv;
    private double totalFunding;
    private double amountRequired;
    private double equityOffered;
    private double valuation;

    private String founderName;
    private String founderEmail;
    private String industryName;
}

