### 1. `users` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| username      | VARCHAR     | NOT NULL, UNIQUE       | 아이디       |
| password      | VARCHAR     | NOT NULL               | 비밀번호     |
| nickname      | VARCHAR     | NOT NULL, UNIQUE       | 닉네임       |
| email         | VARCHAR     | NOT NULL, UNIQUE       | 이메일       |
| created_date  | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP | 생성일      |
| modified_date | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일      |

### 2. `products` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| name          | VARCHAR     | NOT NULL               | 상품명       |
| description   | TEXT        | NULL                   | 상품 설명     |
| price         | DECIMAL     | NOT NULL               | 가격         |
| category      | VARCHAR     | NULL                   | 카테고리     |
| image_url     | VARCHAR     | NULL                   | 이미지 URL   |
| created_date  | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP | 생성일      |
| modified_date | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일      |

### 3. `orders` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES users(id) | 사용자 ID   |
| total_amount  | DECIMAL     | NOT NULL               | 총 금액       |
| shipping_address | VARCHAR | NOT NULL               | 배송 주소     |
| status        | VARCHAR     | DEFAULT 'pending'      | 주문 상태     |
| created_date  | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP | 생성일      |
| modified_date | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일      |

### 4. `order_items` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| order_id      | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES orders(id) | 주문 ID      |
| product_id    | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES products(id) | 상품 ID     |
| quantity      | INT         | NOT NULL               | 수량         |
| price         | DECIMAL     | NOT NULL               | 가격         |

### 5. `payments` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| order_id      | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES orders(id) | 주문 ID      |
| payment_method | VARCHAR    | NOT NULL               | 결제 방법     |
| amount        | DECIMAL     | NOT NULL               | 결제 금액     |
| status        | VARCHAR     | DEFAULT 'pending'      | 결제 상태     |
| created_date  | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP | 생성일      |

### 6. `reviews` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES users(id) | 사용자 ID   |
| product_id    | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES products(id) | 상품 ID     |
| rating        | INT         | NOT NULL               | 평점         |
| comment       | TEXT        | NULL                   | 리뷰 내용     |
| created_date  | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP | 생성일      |
| modified_date | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일      |

### 7. `cart_items` 테이블

| 컬럼명         | 데이터 타입 | 조건                   | 설명         |
|---------------|-------------|------------------------|--------------|
| id            | BIGINT      | PRIMARY KEY, AUTO_INCREMENT | 고유 값       |
| user_id       | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES users(id) | 사용자 ID   |
| product_id    | BIGINT      | NOT NULL, FOREIGN KEY REFERENCES products(id) | 상품 ID     |
| quantity      | INT         | NOT NULL               | 수량         |
| created_date  | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP | 생성일      |
| modified_date | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 수정일      |
