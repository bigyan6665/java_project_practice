package com.example.backend.service.Impl;
import com.example.backend.model.User;
import com.example.backend.service.AuthService;
import com.example.backend.service.UserService;
import com.example.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceimpl implements AuthService {

    @Autowired
    private UserService userService;

    @Override
    public String login(String username, String password) {
        User user = userService.getByUsername(username);
               if( user == null || !user.getPassword().equals(password)){
                 throw new RuntimeException("login failed");
               }
               else {
                   return JwtUtil.generateToken(user);
               }
    }

    @Override
    public boolean changepasword(String oldpassword, String newpassword) {
        return false;
    }
}