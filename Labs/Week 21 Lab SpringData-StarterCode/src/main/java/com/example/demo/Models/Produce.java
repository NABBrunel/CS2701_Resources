package com.example.demo.Models;

import jakarta.persistence.*;

@Entity
public class Produce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "produce")
    private java.util.List<SellerProduce> sellerProduces;

    // default constructor
    public Produce() {}

    // constructor without id
    public Produce(String name) {
        this.name = name;
    }

    // getters and setters
    public Long getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public java.util.List<SellerProduce> getSellerProduces() {
        return sellerProduces;
    }

    public void setSellerProduces(java.util.List<SellerProduce> sellerProduces) {
        this.sellerProduces = sellerProduces;
    }

}