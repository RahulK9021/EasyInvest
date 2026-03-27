package com.investkaro.service;


import com.investkaro.dto.*;
import com.investkaro.entity.Startup;
import java.util.List;
import java.util.Optional;

public interface StartupService {

    Startup createStartup(StartupRequest request ,String email);

    List<StartupResponse> getAllStartups(String email);

    List<StartupResponse> getAllStartups();

    List<StartupResponse> findByIndustry_Id(Long industryId);

    List<StartupResponse> findByInvestmentRange(Double min , Double max);

    List<StartupResponse> findByIndustry_IdAndAmountRequiredBetween(Long industryId, Double min, Double max);

    FundingProgressDTO getFundingProgress(Long startupId);

    List<TopStartupResponse> getTopFundedStartups();

    List<StartupInvestorResponse> getInvestors(Long startupId);

    public Startup updateStartup(Long id , UpdateStartupRequest request , String email);

    public void deleteStartup(Long id ,String email );

    public List<StartupResponse>filterStartups(Long industryId, Double minAmount, Double maxAmount);

    public List<StartupResponse> searchStartups(String keyword);

    public List<FounderDashboardResponse> getFounderDashboard(String email);

    Optional<Startup> findById(Long id);
}