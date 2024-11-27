package com.example.backend.service.Impl;


import com.example.backend.model.User;
import com.example.backend.repo.UserRepository;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user, int id) {
        getById(id);
        user.setId(id);
        return userRepository.save(user);
    }

    @Override
    public void deleteById(int id) {
        getById(id);
        userRepository.deleteById(id);
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User getById(int id){
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElseThrow(()->new RuntimeException("User not found"));
    }

}