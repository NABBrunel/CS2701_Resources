package com.example.springboot_app.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.springboot_app.Models.Produce;


public interface ProduceRepository extends CrudRepository<Produce,Long>{
	
}
