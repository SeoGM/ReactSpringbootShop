CREATE TABLE `user_sessions` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `jwt_token` text NOT NULL COMMENT 'JWT token for the session',
  `created_at` timestamp,
  `expires_at` timestamp
);

CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NOT NULL COMMENT 'Hashed password',
  `name` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `address` varchar(255),
  `email_verified` boolean DEFAULT false COMMENT 'Email verification status',
  `role` varchar(255) COMMENT 'User role, e.g., admin, customer',
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `orders` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `total_amount` decimal NOT NULL,
  `shipping_address` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT 'pending' COMMENT 'Order status, e.g., pending, shipped, cancelled',
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `products` (
  `id` integer PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal NOT NULL,
  `category` varchar(255),
  `image_url` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `password_resets` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `token` varchar(255) UNIQUE NOT NULL,
  `created_at` timestamp,
  `expires_at` timestamp
);

CREATE TABLE `order_items` (
  `id` integer PRIMARY KEY,
  `order_id` integer NOT NULL,
  `product_id` integer NOT NULL,
  `quantity` integer NOT NULL,
  `price` decimal NOT NULL
);

CREATE TABLE `payments` (
  `id` integer PRIMARY KEY,
  `order_id` integer NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `amount` decimal NOT NULL,
  `status` varchar(255) DEFAULT 'pending' COMMENT 'Payment status, e.g., pending, completed, failed',
  `created_at` timestamp
);

CREATE TABLE `reviews` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `product_id` integer NOT NULL,
  `rating` integer NOT NULL COMMENT 'Rating value, e.g., 1 to 5',
  `comment` text,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `email_verifications` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `token` varchar(255) UNIQUE NOT NULL,
  `created_at` timestamp,
  `expires_at` timestamp
);

CREATE TABLE `cart_items` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `product_id` integer NOT NULL,
  `quantity` integer NOT NULL,
  `created_at` timestamp,
  `updated_at` timestamp
);

ALTER TABLE `orders` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `payments` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `email_verifications` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `password_resets` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `user_sessions` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
