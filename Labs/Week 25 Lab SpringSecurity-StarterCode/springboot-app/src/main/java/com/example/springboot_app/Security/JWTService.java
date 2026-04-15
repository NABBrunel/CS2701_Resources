package com.example.springboot_app.Security;

import java.util.ArrayList;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JWTService {
	  static final String PREFIX = "Bearer";

	  // Add token to Authorization header
	  static public void addToken(HttpServletResponse res, String username) {
		

		SecretKey key=  Keys.hmacShaKeyFor(JWTConfig.getSigningKey().getBytes());
	    String JwtToken = Jwts.builder()
	    		.subject(username)
	            .expiration(new Date(System.currentTimeMillis() 
	            + JWTConfig.getExpirationTime()))
	           .signWith(key)
	        .compact();
	    System.out.println(JwtToken);
	    res.addHeader("Authorization", PREFIX + " " + JwtToken);
	    res.addHeader("Access-Control-Expose-Headers", "Authorization");
	  }

	  // Get token from Authorization header
	  static public Authentication getAuthentication(HttpServletRequest request) {
	    String token = request.getHeader("Authorization");
	    SecretKey key=  Keys.hmacShaKeyFor(JWTConfig.getSigningKey().getBytes());
	    
	    if (token != null) {
	     try {
	      String user = Jwts.parser()
	          .verifyWith(key)
	          .build()
	          .parseSignedClaims(token.replace("Bearer ", ""))
	          .getPayload()
	          .getSubject();
	      if (user != null) 
	    	  return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>()); 
	      }catch(Exception e){
	    	System.out.println(e.getMessage());
	      }
	    }
	    return null;
	  }
	}