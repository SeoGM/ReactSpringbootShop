// package com.shop.exception;

// import com.shop.exception.ErrorResponse;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.AuthenticationException;
// import org.springframework.web.bind.annotation.ControllerAdvice;
// import org.springframework.web.bind.annotation.ExceptionHandler;

// @ControllerAdvice
// public class GlobalExceptionHandler {

//     @ExceptionHandler(Exception.class)
//     public ResponseEntity<ErrorResponse> handleGlobalException(Exception ex) {
//         ErrorResponse errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "An unexpected error occurred");
//         return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
//     }

//     @ExceptionHandler(AuthenticationException.class)  // AuthenticationException을 처리
//     public ResponseEntity<ErrorResponse> handleAuthenticationException(AuthenticationException ex) {
//         ErrorResponse errorResponse = new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "Authentication failed: " + ex.getMessage());
//         return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
//     }
// }
