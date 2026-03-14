package com.investkaro.service.Impl;

import com.investkaro.dto.FundingProgressDTO;
import com.investkaro.dto.StartupRequest;
import com.investkaro.entity.FounderProfile;
import com.investkaro.entity.Industry;
import com.investkaro.entity.Startup;
import com.investkaro.entity.User;
import com.investkaro.repository.*;
import com.investkaro.service.StartupService;
import jakarta.persistence.EntityNotFoundException;
import org.hibernate.sql.ast.tree.expression.Star;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartupServiceImpl implements StartupService {
    private final StartupRepository startupRepository;
    private final UserRepository userRepository;
    private final FounderRepository founderRepository;
    private final IndustryRepository industryRepository;
    private final InvestmentRepository investmentRepository;

    public StartupServiceImpl(StartupRepository startupRepository, UserRepository userRepository, FounderRepository founderRepository, IndustryRepository industryRepository, InvestmentRepository investmentRepository) {
        this.startupRepository = startupRepository;
        this.userRepository = userRepository;
        this.founderRepository = founderRepository;
        this.industryRepository = industryRepository;
        this.investmentRepository = investmentRepository;
    }


    @Override
    public Startup createStartup(StartupRequest request, String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        FounderProfile founder = founderRepository.findByUser(user).orElseThrow(() ->new RuntimeException("Founder Not found"));
        Industry industry = industryRepository.findById(request.getIndustryId()).orElseThrow(()-> new RuntimeException("Industry not found"));
        Startup startup = new Startup();
        startup.setCompanyName(request.getCompanyName());
        startup.setBusinessModel(request.getBusinessModel());
        startup.setFoundedYear(request.getFoundedYear());
        startup.setTeamSize(request.getTeamSize());
        startup.setProblem(request.getProblem());
        startup.setSolution(request.getSolution());
        startup.setTargetMarket(request.getTargetMarket());
        startup.setUsp(request.getUsp());
        startup.setCompetitors(request.getCompetitors());
        startup.setRevenue(request.getRevenue());
        startup.setBurnRate(request.getBurnRate());
        startup.setCac(request.getCac());
        startup.setLtv(request.getLtv());
        startup.setTotalFunding(request.getTotalFunding());
        startup.setAmountRequired(request.getAmountRequired());
        startup.setEquityOffered(request.getEquityOffered());
        startup.setValuation(request.getValuation());

        startup.setFounder(founder);
        startup.setIndustry(industry);

        return startupRepository.save(startup);
    }

    @Override
    public List<Startup> getAllStartups(String email) {
        return startupRepository.findAll();
    }

    @Override
    public List<Startup> getAllStartups() {
        return startupRepository.findAll();
    }

    @Override
    public List<Startup> findByIndustry_Id(Long industryId) {
        if (!industryRepository.existsById(industryId)) {
            throw new EntityNotFoundException("Industry not found with id: " + industryId);
        }
        return startupRepository.findByIndustry_Id(industryId);
    }

    @Override
    public List<Startup> findByInvestmentRange(Double min, Double max) {
        return startupRepository.findByAmountRequiredBetween(min , max);
    }

    @Override
    public List<Startup> findByIndustry_IdAndAmountRequiredBetween(Long industryId, Double min, Double max) {
        return startupRepository.findByIndustry_IdAndAmountRequiredBetween(industryId , min , max);
    }

    @Override
    public FundingProgressDTO getFundingProgress(Long startupId) {
        Startup startup = startupRepository.findById(startupId).orElseThrow(()-> new RuntimeException("Startup not found"));
        Double raised = investmentRepository.getTotalInvestmentForStartup(startupId);
        if (raised == null){
            raised = 0.0;
        }

        Double required =  startup.getAmountRequired();

        Double progress = (raised / required) * 100 ;

        FundingProgressDTO dto = new FundingProgressDTO();

        dto.setStartupId(startupId);
        dto.setAmountRequired(required);
        dto.setAmountRaised(raised);
        dto.setProgressPercentage(progress);

        return dto;
    }

}
