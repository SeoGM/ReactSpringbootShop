package com.shop.user.controller;

import com.shop.user.dto.AuthRequest;
import com.shop.user.dto.AuthResponse;
import com.shop.user.jwt.JwtTokenProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;

    public AuthController(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    // 로그인 시 JWT 토큰 발급
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        // 실제 인증 절차는 생략하고, 간단히 사용자 이름을 받아 토큰 생성
        String username = authRequest.getUsername();

        // JWT 토큰 생성
        String token = jwtTokenProvider.createToken(username);

        // 생성된 토큰 반환
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // JWT 토큰 검증
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam String token) {
        if (jwtTokenProvider.validateToken(token)) {
            String username = jwtTokenProvider.getUsernameFromToken(token);
            return ResponseEntity.ok("Token is valid. Username: " + username);
        } else {
            return ResponseEntity.status(401).body("Invalid token.");
        }
    }
}
