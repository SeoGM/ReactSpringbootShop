package com.shop.user.controller;

import com.shop.user.dto.AuthRequest;
import com.shop.user.dto.AuthResponse;
import com.shop.config.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager; // Spring Security에서 제공하는 인증 매니저
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    // 로그인 시 JWT 토큰 발급
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        String username = authRequest.getUsername();
        String password = authRequest.getPassword();

        try {
            // 인증 절차 수행
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));

            // 인증 성공 시 JWT 토큰 생성
            String token = jwtTokenProvider.createToken(username);

            // 로그 출력 (토큰 생성 성공)
            logger.info("토큰 생성 성공: 사용자 이름 = {}", username);

            // 생성된 토큰 반환
            return ResponseEntity.ok(new AuthResponse(token));

        } catch (AuthenticationException e) {
            // 인증 실패 시 로그 출력 및 401 응답
            logger.error("로그인 실패: 사용자 이름 = {}", username);
            return ResponseEntity.status(401).body("Invalid username or password.");
        }
    }

    // JWT 토큰 검증
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam String token) {
        if (jwtTokenProvider.validateToken(token)) {
            String username = jwtTokenProvider.getUsernameFromToken(token);
            return ResponseEntity.ok("Token is valid. Username: " + username);
        } else {
            logger.warn("토큰 검증 실패: token = {}", token);
            return ResponseEntity.status(401).body("Invalid token.");
        }
    }
}
