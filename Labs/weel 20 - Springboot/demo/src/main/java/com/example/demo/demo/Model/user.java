package com.example.demo.demo.Model;
import java.io.Serializable;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name ="users")
public class user implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
   Long id;

   @NotBlank

   String name;
   @NotBlank
   String email;
   @NotBlank
   String password;
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
   public String getEmail() {
    return email;
   }
   public void setEmail(String email) {
    this.email = email;
   }
   public String getPassword() {
    return password;
   }
   public void setPassword(String password) {
    this.password = password;
   } 
}
