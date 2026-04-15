package com.example.springboot_app.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springboot_app.Models.User;
import com.example.springboot_app.Repos.UserRepository;
import com.example.springboot_app.Exceptions.ResourceNotFoundException;

@Service
public class UserService {
	@Autowired
    UserRepository userRepository;
	
	public UserService() {
		super();
		// Auto-generated constructor stub
	}
	
	
	public List<User> getUsers() {
		return (List<User>) userRepository.findAll();
	}

	public void addUser(User newUser) {
		if(newUser.getEmail() == null || newUser.getPassword() == null || newUser.getName() == null) {
			throw new IllegalArgumentException("Email, password and name cannot be null");
		}
		userRepository.save(newUser);
	}
	
	public Optional<User> findByID(Long id) {
		if(id == null) {
			throw new IllegalArgumentException("ID cannot be null");	
		}
		return userRepository.findById(id);
	}
	
	public void deleteUser(Long id) {
		if(id == null) {
			throw new IllegalArgumentException("ID cannot be null");	
		}			
		User user = userRepository.findById(id)
				  .orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
		userRepository.delete(user);
	}
	
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

}
