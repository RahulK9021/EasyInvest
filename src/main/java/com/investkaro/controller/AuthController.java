package com.investkaro.controller;

import com.investkaro.dto.LoginRequest;
import com.investkaro.dto.LoginResponse;
import com.investkaro.dto.RegisterRequest;
import com.investkaro.entity.User;
import com.investkaro.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final AuthService authService;

    private final AuthService service;

    public AuthController(AuthService authService, AuthService service) {
        this.authService = authService;
        this.service = service;
    }

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request){
        return service.register(request);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        String token = authService.login(request.getEmail() , request.getPassword());
        return new LoginResponse(token);
    }
}
