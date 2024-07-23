-- Arch tables
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    roles VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE example (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (username, password, roles) VALUES 
('dqnid', '$2b$10$DDGh9u4yiTY9FJx2faFPlucBbTB6Y3i8YkH7AEztcpeaKv08AjdrW', 'admin'),
('albi', '$2b$10$DDGh9u4yiTY9FJx2faFPlucBbTB6Y3i8YkH7AEztcpeaKv08AjdrW', 'admin');

INSERT INTO example (name, description, image) VALUES 
('dqnid', 'This is a short text stored in a mysql database', 'https://picsum.photos/200/300'),
('albi._.ta', 'This is another short text stored in a mysql database and retrieved by a NestJS backend', 'https://picsum.photos/200/300');
