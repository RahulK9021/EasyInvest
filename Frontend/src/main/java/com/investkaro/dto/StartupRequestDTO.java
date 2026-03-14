package com.investkaro.dto;

import lombok.Data;

@Data
public class StartupRequestDTO {

    private String companyName;
    private String businessModel;
    private Integer foundedYear;
    private Integer teamSize;

    private String problem;
    private String solution;

    private Double amountRequired;
    private Double equityOffered;

}
