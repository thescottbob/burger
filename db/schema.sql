-- Drops the burgers_DB if it exists currently --
DROP DATABASE IF EXISTS burgers_DB;
-- Creates the burgers_db database --
CREATE DATABASE burgers_DB;

-- Make it so all of the following code will affect burgers_DB --
USE burgers_DB;

CREATE TABLE burgers (
  -- Numeric column --
  id INT NOT NULL AUTO_INCREMENT,
  -- String column --
  burger_name VARCHAR(40) NOT NULL,
  -- Boolean column --
  devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);