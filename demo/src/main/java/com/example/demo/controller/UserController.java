package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.dto.UserPostDTO;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/status")
    public String home() {
        return "Backend is running";
    }

    @GetMapping("/all")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public ResponseEntity<?> addUser(@RequestBody UserPostDTO newUserDTO) {

        Map<String, String> errors = new HashMap<>();

        if (newUserDTO.getName() == null || newUserDTO.getName().isEmpty()) {
            errors.put("name", "Name is required");
        }

        if (newUserDTO.getEmail() == null || newUserDTO.getEmail().isEmpty()) {
            errors.put("email", "Email is required");
        }

        if (newUserDTO.getPassword() == null || newUserDTO.getPassword().isEmpty()) {
            errors.put("password", "Password is required");
        }

        if (newUserDTO.getUserType() == null || newUserDTO.getUserType().isEmpty()) {
            errors.put("userType", "User type is required");
        }

        if (!errors.isEmpty()) {
            return ResponseEntity.badRequest().body(errors);
        }

        User newUser = new User(
                newUserDTO.getName(),
                newUserDTO.getEmail(),
                newUserDTO.getPassword(),
                newUserDTO.getUserType()
        );

        User savedUser = userService.addUser(newUser);

        Map<String, Object> response = new HashMap<>();
        response.put("message", "User registered successfully");
        response.put("user", savedUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginRequest) {
        
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");
        
        User foundUser = userService.findByEmail(email);
        
        if (foundUser != null && foundUser.getPassword().equals(password)) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("user", foundUser);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                 .body("Invalid credentials");
        }
    }
    
    @GetMapping
    public String test() {
        return "Use POST to register user";
    }
}