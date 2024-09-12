package com.shop.user.controller;

import com.shop.config.JwtTokenProvider;
import com.shop.user.dto.AuthRequest;
import com.shop.user.dto.AuthResponse;
import com.shop.exception.ErrorResponse;  // ErrorResponse를 exception 패키지로 옮김
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    // 로그인 시 JWT 토큰 발급
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        String username = authRequest.getUsername();
        String password = authRequest.getPassword();

        try {
            // AuthenticationManager를 통해 인증 처리
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );

            // 인증 성공 시 JWT 토큰 생성
            String token = jwtTokenProvider.createToken(authentication.getName());

            // 로그 출력 (성공)
            logger.info("로그인 성공: 사용자 이름 = {}", username);

            // JWT 토큰을 포함한 응답 반환
            return ResponseEntity.ok(new AuthResponse(token));

        } catch (AuthenticationException e) {
            // 로그 출력 (실패)
            logger.error("로그인 실패: 사용자 이름 = {}", username);

            // 에러 응답 DTO 생성 (Lombok 사용, ErrorResponse는 이제 exception 패키지에 위치)
            ErrorResponse errorResponse = new ErrorResponse(401, "Invalid username or password");

            // 인증 실패 시 에러 코드와 메시지를 JSON으로 반환
            return ResponseEntity.status(401).body(errorResponse);
        }
    }
}
