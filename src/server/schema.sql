CREATE DATABASE SundialApp;

USE SundialApp;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  token VARCHAR(255),
  token_exp TIMESTAMP,
  UNIQUE (email)
);

-- INSERT INTO users (username, password, email) VALUES ('user', 'user', 'user@gmail.com');
