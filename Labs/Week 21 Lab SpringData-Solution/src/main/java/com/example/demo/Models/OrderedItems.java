package com.example.demo.Models;


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
@Table(name = "ordered_items")
public class OrderedItems {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "seller_produce_id", nullable = false)
    private SellerProduce sellerProduce;

    @Column(nullable = false)
    private Integer quantity;

    @Column(name = "price_at_order", nullable = false)
    private Float priceAtOrder;

    public OrderedItems() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }

    public SellerProduce getSellerProduce() { return sellerProduce; }
    public void setSellerProduce(SellerProduce sellerProduce) { this.sellerProduce = sellerProduce; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }

    public Float getPriceAtOrder() { return priceAtOrder; }
    public void setPriceAtOrder(Float priceAtOrder) { this.priceAtOrder = priceAtOrder; }
}
