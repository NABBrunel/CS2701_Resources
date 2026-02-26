package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Produce")
public class Produce {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
    
    @Column(nullable = false)
    private String name;

    public Produce(String nameString) {
        this.name = nameString;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    }