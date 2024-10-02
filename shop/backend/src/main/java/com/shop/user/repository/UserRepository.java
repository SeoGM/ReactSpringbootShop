package com.shop.user.repository;

import com.shop.common.user.UserEntity;
import com.shop.user.repository.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}