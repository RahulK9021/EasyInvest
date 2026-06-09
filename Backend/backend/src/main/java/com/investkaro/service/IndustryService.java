package com.investkaro.service;

import com.investkaro.entity.Industry;

import java.util.List;

public interface IndustryService {

    Industry createIndustry(String name);

    List<Industry> getAllIndustries();
}