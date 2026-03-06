package com.example.demo.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Models.OrderedItems;

public interface OrderedItemsRepository extends CrudRepository<OrderedItems, Long> {
    
}
