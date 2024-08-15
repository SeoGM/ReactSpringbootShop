### 1. `users` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| email         | VARCHAR     | NOT NULL, UNIQUE                | 이메일 주소                         |
| password      | VARCHAR     | NOT NULL                        | 해시된 비밀번호                     |
| name          | VARCHAR     | NOT NULL                        | 사용자 이름                         |
| contact       | VARCHAR     | NOT NULL                        | 연락처 정보                         |
| address       | VARCHAR     | NULL                            | 주소 정보                           |
| email_verified| BOOLEAN     | DEFAULT FALSE                   | 이메일 인증 여부                    |
| role          | VARCHAR     | NULL                            | 사용자 역할 (관리자, 고객 등)        |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 생성일                              |
| updated_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일  |

### 2. `products` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| name          | VARCHAR     | NOT NULL                        | 상품명                              |
| description   | TEXT        | NULL                            | 상품 설명                           |
| price         | DECIMAL     | NOT NULL                        | 상품 가격                           |
| category      | VARCHAR     | NULL                            | 상품 카테고리                       |
| image_url     | VARCHAR     | NULL                            | 상품 이미지 URL                     |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 생성일                              |
| updated_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일  |

### 3. `orders` 테이블

| 컬럼명           | 데이터 타입 | 조건                            | 설명                                |
|-----------------|-------------|---------------------------------|-------------------------------------|
| id              | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| user_id         | BIGINT      | NOT NULL, FOREIGN KEY           | 주문자 ID (users 테이블 참조)       |
| total_amount    | DECIMAL     | NOT NULL                        | 총 주문 금액                        |
| shipping_address| VARCHAR     | NOT NULL                        | 배송지 주소                         |
| status          | VARCHAR     | DEFAULT 'pending'               | 주문 상태 (대기, 배송 중, 취소 등)  |
| created_at      | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 주문 생성일                         |
| updated_at      | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일  |

### 4. `order_items` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| order_id      | BIGINT      | NOT NULL, FOREIGN KEY           | 주문 ID (orders 테이블 참조)        |
| product_id    | BIGINT      | NOT NULL, FOREIGN KEY           | 상품 ID (products 테이블 참조)      |
| quantity      | INT         | NOT NULL                        | 주문 수량                           |
| price         | DECIMAL     | NOT NULL                        | 상품 가격                           |

### 5. `payments` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| order_id      | BIGINT      | NOT NULL, FOREIGN KEY           | 주문 ID (orders 테이블 참조)        |
| payment_method| VARCHAR     | NOT NULL                        | 결제 방법                           |
| amount        | DECIMAL     | NOT NULL                        | 결제 금액                           |
| status        | VARCHAR     | DEFAULT 'pending'               | 결제 상태 (대기, 완료, 실패 등)     |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 결제일                              |

### 6. `reviews` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY           | 리뷰 작성자 ID (users 테이블 참조)  |
| product_id    | BIGINT      | NOT NULL, FOREIGN KEY           | 상품 ID (products 테이블 참조)      |
| rating        | INT         | NOT NULL                        | 평점 (1~5)                         |
| comment       | TEXT        | NULL                            | 리뷰 내용                           |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 리뷰 작성일                         |
| updated_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일  |

### 7. `cart_items` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY           | 사용자 ID (users 테이블 참조)       |
| product_id    | BIGINT      | NOT NULL, FOREIGN KEY           | 상품 ID (products 테이블 참조)      |
| quantity      | INT         | NOT NULL                        | 상품 수량                           |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 추가일                              |
| updated_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일  |

### 8. `email_verifications` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY           | 사용자 ID (users 테이블 참조)       |
| token         | VARCHAR     | NOT NULL, UNIQUE                | 이메일 인증 토큰                    |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 생성일                              |
| expires_at    | TIMESTAMP   | NOT NULL                        | 만료일                              |

### 9. `password_resets` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY           | 사용자 ID (users 테이블 참조)       |
| token         | VARCHAR     | NOT NULL, UNIQUE                | 비밀번호 재설정 토큰                |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 생성일                              |
| expires_at    | TIMESTAMP   | NOT NULL                        | 만료일                              |

### 10. `user_sessions` 테이블

| 컬럼명         | 데이터 타입 | 조건                            | 설명                                |
|---------------|-------------|---------------------------------|-------------------------------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT     | 고유 값                             |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY           | 사용자 ID (users 테이블 참조)       |
| jwt_token     | TEXT        | NOT NULL                        | JWT 세션 토큰                       |
| created_at    | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP       | 생성일                              |
| expires_at    | TIMESTAMP   | NOT NULL                        | 만료일                              |
