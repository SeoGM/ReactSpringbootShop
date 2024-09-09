package com.shop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests()  // 최신 메서드
                .requestMatchers("/", "/api/auth/login", "/api/auth/register").permitAll()  // 경로 매칭
                .anyRequest().authenticated()  // 나머지 모든 요청은 인증 요구
                .and()
            .formLogin()  // 기본 로그인 폼 제공
                .loginPage("/api/auth/login")  // 커스텀 로그인 페이지 경로
                .permitAll();

        return http.build();
    }

    // InMemoryUserDetailsManager (데모용)
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        return new InMemoryUserDetailsManager(user);
    }
}
