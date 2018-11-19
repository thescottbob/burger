-- Drops the burgers_DB if it exists currently --
DROP DATABASE IF EXISTS burgers_DB;
-- Creates the burgers_db database --
CREATE DATABASE burgers_DB;

-- Make it so all of the following code will affect burgers_DB --
USE burgers_DB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(40) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);