package com.example.springboot_app.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.springboot_app.Models.User;


public interface UserRepository extends CrudRepository<User,Long>{
	User findByEmail(String email);
}
