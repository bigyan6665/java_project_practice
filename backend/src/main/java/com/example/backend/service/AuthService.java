package com.example.backend.service;

public interface AuthService {
    String login(String username, String password);

    boolean changepasword(String oldpassword, String newpassword);

}