package com.example.backend.controller;

import com.example.backend.service.AuthService;
import com.example.demo.Dto.LoginDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService Authservice;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginDto loginDto) {
        String token = Authservice.login(loginDto.username(), loginDto.password());
        return Map.of("Token", token);
    }


}