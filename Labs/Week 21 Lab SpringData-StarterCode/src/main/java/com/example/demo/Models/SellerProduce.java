package com.example.demo.Models;

import java.math.BigDecimal;
import jakarta.persistence.*;

@Entity
public class SellerProduce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // pricer seller is currently charging 
    private BigDecimal price;

    // quantity in stock
    private int stock;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    @ManyToOne
    @JoinColumn(name = "produce_id")
    private Produce produce;

    public SellerProduce() {
    }

    public SellerProduce(BigDecimal price, int stock, User seller, Produce produce) {
        this.price = price;
        this.stock = stock;
        this.seller = seller;
        this.produce = produce;
    }

    public Long getId() {
    return id;
}

public BigDecimal getPrice() {
    return price;
}

public void setPrice(BigDecimal price) {
    this.price = price;
}

public int getStock() {
    return stock;
}

public void setStock(int stock) {
    this.stock = stock;
}

public User getSeller() {
    return seller;
}

public void setSeller(User seller) {
    this.seller = seller;
}

public Produce getProduce() {
    return produce;
}

public void setProduce(Produce produce) {
    this.produce = produce;
}

    
}
