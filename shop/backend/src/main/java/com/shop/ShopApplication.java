package com.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
public class ShopApplication {
    public static void main(String[] args) {
        SpringApplication.run(ShopApplication.class, args);
    }
}

@RestController
class MessageController {
    @GetMapping("/api/message")
    public String getMessage() {
        return "Hello from Spring Boot!";
    }
}

@RestController
class ProductController {
    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return List.of(
            new Product(1, "Product 1"),
            new Product(2, "Product 2")
        );
    }
}

class Product {
    private int id;
    private String name;

    public Product(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
