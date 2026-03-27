package com.investkaro.dto;

import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.Industry;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
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
    private String industryName;
}

