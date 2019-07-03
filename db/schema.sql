CREATE DATABASE yummy_db;
USE yummy_db;
-- USE pm5acu7xqn4x7tno;

DROP TABLE burgers;
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	-- createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);
