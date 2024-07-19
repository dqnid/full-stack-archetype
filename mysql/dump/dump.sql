-- Arch tables
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    roles VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (username, password, roles) VALUES 
('dqnid', '$2b$10$DDGh9u4yiTY9FJx2faFPlucBbTB6Y3i8YkH7AEztcpeaKv08AjdrW', 'admin'),
('albi', '$2b$10$DDGh9u4yiTY9FJx2faFPlucBbTB6Y3i8YkH7AEztcpeaKv08AjdrW', 'admin');
