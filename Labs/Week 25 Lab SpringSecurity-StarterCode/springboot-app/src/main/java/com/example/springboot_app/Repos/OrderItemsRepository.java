package com.example.springboot_app.Repos;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.springboot_app.Models.OrderItem;


public interface OrderItemsRepository extends CrudRepository<OrderItem,Long>{
    @Query("SELECT SUM(o.price_at_order * o.quantity) FROM OrderItem o WHERE o.order.id = :order_id") 
    Double sumOrderItemsByOrderIdParams( @Param("order_id") Long order_id);	
}
