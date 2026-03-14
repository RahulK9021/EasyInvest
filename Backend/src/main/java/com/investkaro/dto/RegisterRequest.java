package com.investkaro.dto;

import com.investkaro.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String fullName;

    private String email;

    private String password;

    private String phone;

    private String location;

    private Role role;

}