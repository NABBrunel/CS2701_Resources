package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    
    public User addUser(User user) {
        System.out.println("=== UserService.addUser DEBUG ===");
        System.out.println("Saving user - Email: " + user.getEmail());
        System.out.println("Saving user - Password: " + user.getPassword());
        
        // Check if email already exists
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            System.out.println("Email already exists: " + user.getEmail());
            throw new RuntimeException("Email already exists");
        }
        
        User savedUser = userRepository.save(user);
        System.out.println("User saved successfully with ID: " + savedUser.getId());
        System.out.println("=================================");
        return savedUser;
    }
    
    public User findByEmail(String email) {
        System.out.println("Finding user by email: " + email);
        User user = userRepository.findByEmail(email);
        System.out.println("Found user: " + (user != null ? user.getEmail() : "null"));
        return user;
    }
}