// package com.shop.user.service;

// import com.shop.user.entity.User;
// import com.shop.user.repository.UserRepository;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.security.core.userdetails.User.UserBuilder;
// import org.springframework.stereotype.Service;

// @Service
// public class CustomUserDetailsService implements UserDetailsService {

//     private static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);
//     private final UserRepository userRepository;

//     public CustomUserDetailsService(UserRepository userRepository) {
//         this.userRepository = userRepository;
//     }

//     @Override
//     public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//         logger.info("Trying to load user by email: {}", email);

//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> {
//                     logger.error("User not found with email: {}", email);
//                     return new UsernameNotFoundException("User not found with email: " + email);
//                 });

//         logger.info("User found: {}", user.getEmail());

//         UserBuilder builder = org.springframework.security.core.userdetails.User.withUsername(user.getEmail());
//         builder.password(user.getPassword());
//         builder.roles(user.getRole() != null ? user.getRole() : "USER");

//         logger.info("Returning user details for email: {}", email);
//         return builder.build();
//     }
// }
