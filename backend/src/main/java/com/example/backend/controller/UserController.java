package com.example.backend.controller;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/list")
    public List<User> getAllUser() {
        return userService.getAll();
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.add(user);
    }

    @PutMapping("/Update/{id}")
    public User Updateuser(@RequestBody User user, @PathVariable int id) {
        return userService.updateUser(user, id);
    }
    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteById(@PathVariable int id) {
        userService.deleteById(id);
        return Map.of("Success",true);
    }
}