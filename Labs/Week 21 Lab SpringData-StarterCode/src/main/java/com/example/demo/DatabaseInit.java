package com.example.demo;

import com.example.demo.Models.*;
import com.example.demo.Repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.math.BigDecimal;

@Component
public class DatabaseInit implements CommandLineRunner{
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ProduceRepository produceRepository;
	@Autowired
	private Seller_ProduceRepository seller_produceRepository;
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public void run(String... args) throws Exception {
		userRepository.deleteAll();
		produceRepository.deleteAll();
		seller_produceRepository.deleteAll();
		orderRepository.deleteAll();

		User user1 = new User("Bob","bob@sample.com", "bob_pass", UserType.BUYER);
		userRepository.save(user1);
			
		User user2 = new User("Prapanch", "prapanch@sample.com", "prapanch_pass", UserType.SELLER);
		userRepository.save(user2);
		
		User user3 = new User("Ademola", "ademola@sample.com", "ademola_pass", UserType.BOTH);
		userRepository.save(user3);

		User user4 = new User("Zhixian", "zhixian@sample.com", "zhixian_pass", UserType.BUYER
		);
		userRepository.save(user4);
		
		Produce Apple = new Produce("Apple");
		Produce Lettuce = new Produce("Lettuce");
		Produce Potatoes = new Produce("Potatoes");
		produceRepository.save(Apple);
		produceRepository.save(Lettuce);
		produceRepository.save(Potatoes);

		Seller_Produce seller_produce1 = new Seller_Produce(user2, Apple, new BigDecimal (0.15),100);
		seller_produceRepository.save(seller_produce1);
		Seller_Produce seller_produce2 = new Seller_Produce(user3, Lettuce, new BigDecimal (0.30), 50);
		seller_produceRepository.save(seller_produce2);
		Seller_Produce seller_produce3 = new Seller_Produce(user4, Potatoes, new BigDecimal (0.25), 75);
		seller_produceRepository.save(seller_produce3);
		
		Order bobOrder = new Order(user1);
		orderRepository.save(bobOrder);
		Order bobitem1 = new Order(bobOrder, seller_produce2, 2);

		Order bobitem2 = new Order(bobOrder, seller_produce1, 1);
		orderRepository.save(bobitem1);
		orderRepository.save(bobitem2);
	}
}


