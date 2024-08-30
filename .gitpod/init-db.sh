#!/bin/bash

# MySQL 설치
sudo apt-get update
sudo apt-get install -y mysql-server

# MySQL 디렉토리 권한 설정
sudo mkdir -p /var/run/mysqld
sudo chown mysql:mysql /var/run/mysqld
sudo chmod 755 /var/run/mysqld

# MySQL 서비스 시작
sudo service mysql start

# shop_db 데이터베이스와 shop_user 사용자 생성
sudo mysql -e "CREATE DATABASE IF NOT EXISTS shop_db;"
sudo mysql -e "CREATE USER IF NOT EXISTS 'shop_user'@'localhost' IDENTIFIED BY 'Str0ngP@ssword!';"
sudo mysql -e "GRANT ALL PRIVILEGES ON shop_db.* TO 'shop_user'@'localhost'; FLUSH PRIVILEGES;"

# 루트 폴더에 있는 SQL 스크립트 실행
sudo mysql -e "USE shop_db; source /workspace/$(basename `pwd`)/shop_db.sql;"