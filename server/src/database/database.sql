CREATE DATABASE habits_watcher;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  photo_url VARCHAR(255),
  created_date TIMESTAMP DEFAULT NOW(),
)