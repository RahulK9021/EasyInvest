package com.investkaro.entity;

import jakarta.persistence.*;

@Entity
public class InvestorPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double minInvestment;

    private Double maxInvestment;

    private String startupStage;

    private String investmentType;

    private String riskAppetite;

    private String businessModel;

    @ManyToOne
    @JoinColumn(name="industry_id")
    private Industry industry;

    @OneToOne
    @JoinColumn(name="investor_id")
    private InvestorProfile investor;
}
