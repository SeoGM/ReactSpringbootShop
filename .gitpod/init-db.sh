#!/bin/bash

# MySQL 설치
sudo apt-get update
sudo apt-get install -y mysql-server

# MySQL 서비스 시작
sudo service mysql start

# 루트 폴더에 있는 SQL 스크립트 실행
mysql -u root < /workspace/$(basename `pwd`)/shop_db.sql
