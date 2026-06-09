package com.investkaro.repository;

import com.investkaro.entity.Interest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InterestRepository extends JpaRepository<Interest , Long> {
    List<Interest> findByStartup_Id(Long startupId);

    List<Interest> findByStartup_Founder_Id(Long founderId);
}
