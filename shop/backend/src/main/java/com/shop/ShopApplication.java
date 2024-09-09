package com.shop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class ShopApplication {
    public static void main(String[] args) {
        SpringApplication.run(ShopApplication.class, args);
    }
}

@RestController
class TestController {
    @GetMapping("/")
    public String home() {
        return "home";  // home.html 페이지로 리턴
    }

    @GetMapping("/login")
    public String login() {
        return "login";  // login.html 페이지로 리턴
    }

    @GetMapping("/join")
    public String join() {
        return "join";  // join.html 페이지로 리턴
    }

    @GetMapping("/api/message")
    public String getMessage() {
        return "Hello from Spring Boot!";
    }
}
