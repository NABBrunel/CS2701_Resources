package com.example.springboot_app.Repos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.springboot_app.Models.SellerProduce;
import com.example.springboot_app.Models.User;


public interface SellerProduceRepository extends CrudRepository<SellerProduce,Long>{
    @Query("SELECT sp FROM SellerProduce sp JOIN FETCH sp.seller JOIN FETCH sp.produce WHERE sp.seller = :seller")
    List<SellerProduce> findBySeller(@Param("seller") User seller);
	
}
