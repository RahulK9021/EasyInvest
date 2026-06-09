package com.investkaro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class InvestmentHistoryResponse {

    private String startupName;
    private Double amount;
    private LocalDateTime date;

}