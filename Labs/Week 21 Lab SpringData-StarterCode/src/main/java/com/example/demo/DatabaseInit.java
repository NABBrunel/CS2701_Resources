package com.example.demo;

import com.example.demo.Models.*;
import com.example.demo.Repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class DatabaseInit implements CommandLineRunner{
	@Autowired 
	private UserRepository userRepository;
	
	@Override
	 public void run(String... args) throws Exception {
		userRepository.deleteAll();
		
		
		User user1 = new User("Bob","bob@sample.com", "bob_pass", UserType.BUYER);
		userRepository.save(user1);
			
		
	}
}
