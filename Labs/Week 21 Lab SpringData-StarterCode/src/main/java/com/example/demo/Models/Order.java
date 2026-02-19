package com.example.demo.Models;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.CascadeType;
import java.util.Date;


@Entity
@Table(name="Orders")
@EntityListeners(AuditingEntityListener.class)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
    @Column(nullable = false, updatable = false)
	@CreatedDate
	private Date orderDate;
    
    
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="buyer")
    private User buyer;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private java.util.List<OrderItem> orderItems;



    public Order() {
    }


    public Order(User buyer) {
        this.buyer = buyer;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public User getBuyer() {
        return buyer;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }


    public void setBuyer(User buyer) {
        this.buyer = buyer;
    }

    public java.util.List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(java.util.List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

  
}
