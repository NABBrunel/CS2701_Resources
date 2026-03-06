package com.example.demo.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.User;
import com.example.demo.Services.UserService;

@RestController

@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
	UserService userService;
    
    // Get All Users
    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }
    
}
