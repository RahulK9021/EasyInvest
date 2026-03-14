package com.investkaro.service;


import com.investkaro.dto.FundingProgressDTO;
import com.investkaro.dto.StartupRequest;
import com.investkaro.entity.Startup;
import java.util.List;

public interface StartupService {

    Startup createStartup(StartupRequest request ,String email);

    List<Startup> getAllStartups(String email);

    List<Startup> getAllStartups();

    List<Startup> findByIndustry_Id(Long industryId);

    List<Startup> findByInvestmentRange(Double min , Double max);

    List<Startup> findByIndustry_IdAndAmountRequiredBetween(Long industryId, Double min, Double max);

    FundingProgressDTO getFundingProgress(Long startupId);
}