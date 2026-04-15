package com.example.springboot_app.Security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class JWTConfig {
    
    @Value("${jwt.secret}")
    private String secret;
    
    @Value("${jwt.expiration:86400000}")
    private long expiration;
    
    private static String SIGNING_KEY;
    private static long EXPIRATION_TIME;
    
    @PostConstruct
    public void init() {
        SIGNING_KEY = this.secret;
        EXPIRATION_TIME = this.expiration;
    }
    
    public static String getSigningKey() {
        return SIGNING_KEY;
    }
    
    public static long getExpirationTime() {
        return EXPIRATION_TIME;
    }
}