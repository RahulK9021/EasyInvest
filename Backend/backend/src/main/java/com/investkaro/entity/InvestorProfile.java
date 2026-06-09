package com.investkaro.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class InvestorProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String linkedin;
    private String website;

    private String currentRole;
    private String companyName;

    private Integer experienceYears;

    private Integer previouslyFundedStartups;

    private Double totalCapitalInvested;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;
}