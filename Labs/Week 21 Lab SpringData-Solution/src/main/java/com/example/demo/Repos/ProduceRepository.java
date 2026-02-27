package com.example.demo.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Models.Produce;

public interface ProduceRepository extends CrudRepository<Produce, Long> {
    
}
