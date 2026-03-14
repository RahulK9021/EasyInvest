package com.investkaro.repository;

import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FounderRepository extends JpaRepository<FounderProfile,Long> {
    Optional<FounderProfile> findByUser(User user);
}
