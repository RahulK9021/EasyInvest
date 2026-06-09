package com.investkaro.controller;

import com.investkaro.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.ok(adminService.getAllUsers());
    }

    @GetMapping("/startups")
    public ResponseEntity<?> getAllStartups(){
        return ResponseEntity.ok(adminService.getAllStartups());
    }

    @DeleteMapping("/startups/{id}")
    public ResponseEntity<?> deleteStartup(@PathVariable Long id){
        adminService.deleteStartupByAdmin(id);
        return ResponseEntity.ok( "Startup deleted by admin");
    }
}
