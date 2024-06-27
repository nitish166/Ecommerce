CREATE DATABASE Ecommerce;

USE Ecommerce;

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE Orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10, 2),
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Order_Chairs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  chair_id INT,
  FOREIGN KEY (order_id) REFERENCES Orders(id)
);

CREATE TABLE Order_Tables (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  table_id INT,
  FOREIGN KEY (order_id) REFERENCES Orders(id)
);

CREATE TABLE Order_Tops (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  top_id INT,
  FOREIGN KEY (order_id) REFERENCES Orders(id)
);
