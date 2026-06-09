package com.investkaro.service;

import com.investkaro.entity.Startup;
import com.investkaro.entity.User;

import java.util.List;

public interface AdminService {

    List<User> getAllUsers();

    List<Startup> getAllStartups();

    void deleteStartupByAdmin(Long id);
}
