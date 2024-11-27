package com.example.backend.service;

import com.example.backend.model.User;

import java.util.List;

public interface UserService {

    User add(User user);

    List<User> getAll();

    User getByUsername(String username);

    void deleteById(int id);

    User updateUser(User user, int id);

    User getById(int id);


//    void DeleteById(int id);
}