package com.shop.user.controller;

import com.shop.common.user.UserEntity;
import com.shop.user.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

//     @GetMapping("/users")
//     public List<User> getAllUsers() {
//         return userService.getAllUsers();
//     }
}
