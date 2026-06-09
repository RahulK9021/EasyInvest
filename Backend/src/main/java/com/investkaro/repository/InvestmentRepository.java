package com.investkaro.repository;

import com.investkaro.entity.Investment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface InvestmentRepository extends JpaRepository<Investment , Long> {
    List<Investment> findByInvestor_Id(Long investorId);

    List<Investment> findByStartup_Id(Long startupId);

    boolean existsByInvestor_IdAndStartup_Id(Long investorId, Long startupId);

    @Query("SELECT SUM(i.amount) FROM Investment i WHERE i.startup.id = :startupId")
    Double getTotalInvestmentForStartup(@Param("startupId") Long startupId);


    @Query("SELECT SUM(i.amount) FROM Investment i WHERE i.investor.id = :investorId")
    Double getTotalInvested(@Param("investorId") Long investorId);

    @Query("SELECT MAX(i.amount) FROM Investment i WHERE i.investor.id = :investorId")
    Double getLargestInvestment(@Param("investorId") Long investorId);

    @Query("SELECT COUNT(DISTINCT i.startup.id) FROM Investment i WHERE i.investor.id = :investorId")
    Long getTotalStartupsInvested(@Param("investorId") Long investorId);

    void deleteByStartupId(Long startupId);

    List<Investment> findByInvestorIdOrderByCreatedAtDesc(Long investorId);

    @Query("SELECT COUNT(i) FROM Investment i WHERE i.startup.id = :startupId")
    Long countInvestorsByStartupId(Long startupId);


}
