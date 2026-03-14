package com.investkaro.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Investment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    private LocalDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "investor_id")
    private InvestorProfile investor;

    @ManyToOne
    @JoinColumn(name = "startup_id")
    private Startup startup;

}