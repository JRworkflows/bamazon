DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR (50),
    department_name VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INT(100)

)