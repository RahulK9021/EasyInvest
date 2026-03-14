package com.investkaro.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class FounderProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String linkedin;

    private String website;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
