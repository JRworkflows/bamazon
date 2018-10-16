DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE IF NOT EXISTS products (
	item_id INT AUTO_INCREMENT,
	product_name VARCHAR(255) NOT NULL,
	department_name VARCHAR (255),
    price DECIMAL(4,2),
    stock_quantity TINYINT,
    PRIMARY KEY(item_id)
);