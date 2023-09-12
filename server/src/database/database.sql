CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  user_name VARCHAR(255),
  photo_url VARCHAR(255),
  created_date TIMESTAMP DEFAULT NOW()
);

CREATE TABLE habits(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  habitCondition VARCHAR(255),
  color VARCHAR(255),
  user_id INT REFERENCES users(id)
);

CREATE TABLE user_logs(
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  action BOOLEAN,
  user_id INT REFERENCES users(id),
  habit_id INT REFERENCES habits(id)
);