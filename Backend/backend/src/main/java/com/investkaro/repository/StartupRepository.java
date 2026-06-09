package com.investkaro.repository;

import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.Startup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StartupRepository extends JpaRepository <Startup ,Long> {
    List<Startup> findByFounder(FounderProfile founder);

    List<Startup> findByIndustry_Id(Long industryId);

    List<Startup> findByAmountRequiredBetween(Double min , Double max);

    List<Startup> findByIndustry_IdAndAmountRequiredBetween(Long industryId, Double min, Double max);

    @Query("SELECT s FROM Startup s ORDER BY s.totalFunding DESC")
    List<Startup> findTopFundedStartups();


//    @Query("SELECT SUM(i.amount) FROM Investment i WHERE i.startup.id = :startupId")
//    Double getTotalInvestmentForStartup(Long startupId);
}
