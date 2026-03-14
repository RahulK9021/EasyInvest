package com.investkaro.service.Impl;

import com.investkaro.entity.Industry;
import com.investkaro.repository.IndustryRepository;
import com.investkaro.service.IndustryService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class IndustryServiceImpl implements IndustryService {

    private final IndustryRepository industryRepository;

    public IndustryServiceImpl(IndustryRepository industryRepository) {
        this.industryRepository = industryRepository;
    }

    @Override
    public Industry createIndustry(String name) {
        Industry industry = new Industry();
        industry.setName(name);
        return industryRepository.save(industry);
    }

    @Override
    public List<Industry> getAllIndustries() {
        return industryRepository.findAll();
    }
}
