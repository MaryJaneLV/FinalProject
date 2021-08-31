CREATE TABLE IF NOT EXISTS user
(
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(32) not null ,
  password VARCHAR(64)
);

CREATE table IF NOT EXISTS post
(
  id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) not null ,
  text VARCHAR(1000),
  user_id BIGINT,
  FOREIGN KEY (user_id) REFERENCES user(id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

insert into post (id, title, text, user_id)
values (1, 'Enterprise-wide', 'Synergized mission-critical policy', 1);