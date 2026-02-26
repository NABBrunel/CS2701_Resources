package com.example.demo.Models;

import java.math.BigDecimal;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name="Ordered_Items")
public class Ordered_Items {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="order_id")
    private Order order;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="seller_produce_id")
    private Seller_Produce sellerProduce;

    public Ordered_Items() {
    }
    @Column(name="quantity", nullable = false)
    private int quantity;
    @Column(name="price_at_order", nullable = false, precision = 10, scale = 2)
    private BigDecimal priceAtOrder;

    public Ordered_Items(Order order, Seller_Produce sellerProduce, int quantity, BigDecimal priceAtOrder) {
        this.order = order;
        this.sellerProduce = sellerProduce;
        this.quantity = quantity;
        this.priceAtOrder = priceAtOrder;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Seller_Produce getSellerProduce() {
        return sellerProduce;
    }

    public void setSellerProduce(Seller_Produce sellerProduce) {
        this.sellerProduce = sellerProduce;
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
}