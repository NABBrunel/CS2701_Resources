package com.example.demo.Repos;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.Models.OrderItem;

public interface OrderItemRepository extends CrudRepository<OrderItem, Long> {
}
