package com.example.demo.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.UserPostDTO;
import com.example.demo.Models.User;
import com.example.demo.Models.UserType;
import com.example.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody UserPostDTO newUserDTO) {

        if (newUserDTO.getName() == null ||
            newUserDTO.getEmail() == null ||
            newUserDTO.getPassword() == null ||
            newUserDTO.getUserType() == null ||
            newUserDTO.getUserType() == UserType.NONE) {

            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Name, Email, Password, and UserType are required.");
        }

        User newUser = new User();
        newUser.setName(newUserDTO.getName());
        newUser.setEmail(newUserDTO.getEmail());
        newUser.setPassword(newUserDTO.getPassword());
        newUser.setUserType(newUserDTO.getUserType());

        User savedUser = userService.addUser(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {

        if (id == null || id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        User user = userService.findByID(id).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {

        if (id == null || id <= 0) {
            return ResponseEntity.badRequest().build();
        }

        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/findByEmail")
    public ResponseEntity<?> getUserByEmail(@RequestParam String email) {

        if (email == null || email.isBlank()) {
            return ResponseEntity.badRequest().body("Email parameter is required.");
        }

        User user = userService.findByEmail(email);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }
}