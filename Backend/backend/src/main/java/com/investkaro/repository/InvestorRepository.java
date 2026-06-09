package com.investkaro.repository;

import com.investkaro.entity.InvestorProfile;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface InvestorRepository extends JpaRepository<InvestorProfile,Long> {
    Optional<InvestorProfile> findByUser(User user);
}
