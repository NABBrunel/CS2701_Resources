package com.example.demo;

import com.example.demo.Models.*;
import com.example.demo.Repos.*;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInit implements CommandLineRunner {

    private final ProduceRepository produceRepository;
    private final SellerProduceRepository sellerProduceRepository;
    private final OrderItemRepository orderItemRepository;
    private final OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public DatabaseInit(
            ProduceRepository produceRepository,
            SellerProduceRepository sellerProduceRepository,
            OrderItemRepository orderItemRepository,
            OrderRepository orderRepository) {
        this.produceRepository = produceRepository;
        this.sellerProduceRepository = sellerProduceRepository;
        this.orderItemRepository = orderItemRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("DatabaseInit is running...");

        // Clear all data for clean startup
        orderItemRepository.deleteAll();
        orderRepository.deleteAll();
        sellerProduceRepository.deleteAll();
        produceRepository.deleteAll();
        userRepository.deleteAll();

        // =============================
        // CREATE USERS (FIXED)
        // =============================

        User bob = new User("Bob", "bob@sample.com", "bob_pass", UserType.BUYER);
        User prapanch = new User("Prapanch", "prapanch@sample.com", "pass123", UserType.SELLER);
        User ademola = new User("Ademola", "ademola@sample.com", "pass123", UserType.BOTH);
        User zhixian = new User("Zhixian", "zhixian@sample.com", "pass123", UserType.BUYER);

        bob = userRepository.save(bob);
        prapanch = userRepository.save(prapanch);
        ademola = userRepository.save(ademola);
        zhixian = userRepository.save(zhixian);

        System.out.println("Users added successfully.");

        // =============================
        // CREATE PRODUCE
        // =============================

        Produce apple = produceRepository.save(new Produce("Apple"));
        Produce lettuce = produceRepository.save(new Produce("Lettuce"));
        Produce potatoes = produceRepository.save(new Produce("Potatoes"));

        // =============================
        // SELLER PRODUCE
        // =============================

        SellerProduce prapanchApple = sellerProduceRepository.save(
                new SellerProduce(new BigDecimal("0.15"), 100, prapanch, apple));

        SellerProduce prapanchLettuce = sellerProduceRepository.save(
                new SellerProduce(new BigDecimal("0.25"), 20, prapanch, lettuce));

        SellerProduce ademolaApple = sellerProduceRepository.save(
                new SellerProduce(new BigDecimal("0.30"), 50, ademola, apple));

        SellerProduce ademolaPotatoes = sellerProduceRepository.save(
                new SellerProduce(new BigDecimal("0.05"), 30, ademola, potatoes));

        // =============================
        // BOB ORDER
        // =============================

        Order bobOrder = new Order();
        bobOrder.setBuyer(bob);
        bobOrder.setOrderDate(new Date());
        bobOrder = orderRepository.save(bobOrder);

        orderItemRepository.save(
                new OrderItem(2, ademolaApple.getPrice(), bobOrder, ademolaApple));

        orderItemRepository.save(
                new OrderItem(1, prapanchLettuce.getPrice(), bobOrder, prapanchLettuce));

        // =============================
        // ZHIXIAN ORDER
        // =============================

        Order zhixianOrder = new Order();
        zhixianOrder.setBuyer(zhixian);
        zhixianOrder.setOrderDate(new Date());
        zhixianOrder = orderRepository.save(zhixianOrder);

        orderItemRepository.save(
                new OrderItem(10, prapanchApple.getPrice(), zhixianOrder, prapanchApple));

        orderItemRepository.save(
                new OrderItem(15, ademolaPotatoes.getPrice(), zhixianOrder, ademolaPotatoes));

        System.out.println("Database initialized successfully.");
    }
}