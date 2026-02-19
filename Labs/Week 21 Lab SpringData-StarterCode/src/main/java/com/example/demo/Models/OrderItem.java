package com.example.demo.Models;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantity;

    // price at the time of ordering
    private BigDecimal priceAtOrder;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "seller_produce_id")
    private SellerProduce sellerProduce;

    public OrderItem() {}

    public OrderItem(int quantity, BigDecimal priceAtOrder, Order order, SellerProduce sellerProduce) {
        this.quantity = quantity;
        this.priceAtOrder = priceAtOrder;
        this.order = order;
        this.sellerProduce = sellerProduce;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPriceAtOrder() {
        return priceAtOrder;
    }

    public void setPriceAtOrder(BigDecimal priceAtOrder) {
        this.priceAtOrder = priceAtOrder;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public SellerProduce getSellerProduce() {
        return sellerProduce;
    }

    public void setSellerProduce(SellerProduce sellerProduce) {
        this.sellerProduce = sellerProduce;
    }
}