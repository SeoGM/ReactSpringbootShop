package com.shop.user.controller;

import com.shop.config.JwtTokenProvider;
import com.shop.user.dto.AuthRequest;
import com.shop.user.dto.AuthResponse;
import com.shop.user.entity.User;
import com.shop.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    // 로그인 시 JWT 토큰 발급
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        String email = authRequest.getUsername();
        String password = authRequest.getPassword();

        // 로그 출력 (로그인 시도)
        logger.info("로그인 시도: 이메일 = {}", email);

        // DB에서 사용자 조회 (이메일 기반)
        User user = userService.findByEmail(email);
        if (user == null) {
            logger.warn("로그인 실패: 이메일을 찾을 수 없음 = {}", email);
            return ResponseEntity.status(401).body("Invalid email or password.");
        }

        // 비밀번호 검증
        if (!passwordEncoder.matches(password, user.getPassword())) {
            logger.warn("로그인 실패: 비밀번호 불일치 = {}", email);
            return ResponseEntity.status(401).body("Invalid email or password.");
        }

        // 사용자 역할(Role) 가져오기
        String role = user.getRole();

        // JWT 토큰 생성 (role 포함)
        String token = jwtTokenProvider.createToken(email, role);

        // 로그 출력 (토큰 생성 성공)
        logger.info("토큰 생성 성공: 이메일 = {}, 역할 = {}", email, role);

        // 생성된 토큰 반환
        return ResponseEntity.ok(new AuthResponse(token));
    }

    // JWT 토큰 검증
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestParam String token) {
        if (jwtTokenProvider.validateToken(token)) {
            String email = jwtTokenProvider.getUsernameFromToken(token);
            String role = jwtTokenProvider.getRoleFromToken(token); // role 정보 추출
            return ResponseEntity.ok("Token is valid. Email: " + email + ", Role: " + role);
        } else {
            return ResponseEntity.status(401).body("Invalid token.");
        }
    }
}
