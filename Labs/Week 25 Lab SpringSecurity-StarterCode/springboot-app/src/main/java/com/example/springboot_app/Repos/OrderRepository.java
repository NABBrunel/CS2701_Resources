package com.example.springboot_app.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.springboot_app.Models.Order;


public interface OrderRepository extends CrudRepository<Order,Long>{
	
}
