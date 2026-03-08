package com.example.demo.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Models.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {
   
}
