package com.shop.user.service;

import com.shop.common.user.UserEntity;

import com.shop.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserEntity findByEmail(String email) {
        Optional<UserEntity> user = userRepository.findByEmail(email);
        return user.orElse(null);
    }
}
