package com.investkaro.repository;

import com.investkaro.dto.StartupResponse;
import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.Startup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface StartupRepository extends JpaRepository <Startup ,Long> {
    List<Startup> findByFounder(FounderProfile founder);

    List<StartupResponse> findByIndustry_Id(Long industryId);

    List<StartupResponse> findByAmountRequiredBetween(Double min , Double max);

    List<StartupResponse> findByIndustry_IdAndAmountRequiredBetween(Long industryId, Double min, Double max);

    @Query("SELECT s FROM Startup s ORDER BY s.totalFunding DESC")
    List<Startup> findTopFundedStartups();


//    @Query("SELECT SUM(i.amount) FROM Investment i WHERE i.startup.id = :startupId")
//    Double getTotalInvestmentForStartup(Long startupId);

    @Query("""  
    SELECT s FROM Startup s
    WHERE (:industryId IS NULL OR s.industry.id = :industryId)
    AND (:minAmount IS NULL OR s.amountRequired >= :minAmount)
    AND (:maxAmount IS NULL OR s.amountRequired <= :maxAmount)
    """)
    List<StartupResponse> filterStartups(
                Long industryId,
                Double minAmount,
                Double maxAmount
        );

    @Query("""
    SELECT s FROM Startup s
    WHERE LOWER(s.companyName) LIKE LOWER(CONCAT('%', :keyword, '%'))
       OR LOWER(s.businessModel) LIKE LOWER(CONCAT('%', :keyword, '%'))
       OR LOWER(s.problem) LIKE LOWER(CONCAT('%', :keyword, '%'))
    """)
    List<StartupResponse> searchStartups(String keyword);

}
