package com.investkaro.entity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Startup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @ManyToOne
    @JoinColumn(name="founder_id")
    private FounderProfile founder;

    @ManyToOne
    @JoinColumn(name="industry_id")
    private Industry industry;
}
