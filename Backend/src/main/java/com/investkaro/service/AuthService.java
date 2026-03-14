package com.investkaro.service;

import com.investkaro.dto.RegisterRequest;
import com.investkaro.entity.User;

public interface AuthService {

    User register(RegisterRequest registerRequest);

    String login(String email , String password);
}
