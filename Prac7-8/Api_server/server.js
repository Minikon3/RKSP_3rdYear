const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Порт сервера

// Настройка подключения к базе данных MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user', // Имя пользователя MySQL
  password: 'password', // Пароль MySQL
  database: 'my_react_app', // Название БД
});

// Подключение к базе данных
connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to MySQL:', error);
    return;
  }
  console.log('Connected to MySQL database');
});

// Использование middleware для разбора тела запроса и обработки CORS
app.use(bodyParser.json());
app.use(cors());

// Обработка запроса для входа пользователя
app.post('/api/login', (req, res) => {
    console.log('Попытка входа');
    const { username, password } = req.body;
    // Запрос к базе данных для проверки пользователя
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Server error' });
        return;
      }
  
      if (results.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }
  
      const user = results[0];
      res.json({
        id: user.id,
        username: user.username,
        role: user.role,
        description: user.description,
      });
    });
  });

// Обработка запроса для получения списка пользователей
app.get('/api/users', (req, res) => {
    // Запрос к базе данных для получения всех пользователей
    const sql = 'SELECT id, username, role, description FROM users';
    connection.query(sql, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Server error' });
        return;
      }
  
      res.json(results);
    });
  });
  

// Обработка запроса для обновления описания пользователя
app.put('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  const { username, password, role, description } = req.body;
  const sql = 'UPDATE users SET username = ?, password = ?, role = ?, description = ? WHERE id = ?';
  connection.query(sql, [username, password, role, description, userId], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    res.json({ message: 'User updated successfully' });
  });
});

  
  app.get('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT * FROM users WHERE id = ?';
    connection.query(sql, [userId], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      const user = results[0];
      res.json(user);
    });
  });
  

  app.post('/api/users', (req, res) => {
    const { username, password, role, description } = req.body;
    const sql = 'INSERT INTO users (username, password, role, description) VALUES (?, ?, ?, ?)';
    connection.query(sql, [username, password, role, description], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });

  app.put('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const { username, role, description } = req.body;
    const sql = 'UPDATE users SET username = ?, role = ?, description = ? WHERE id = ?';
    connection.query(sql, [username, role, description, userId], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      res.json({ message: 'User updated successfully' });
    });
  });

  app.delete('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = 'DELETE FROM users WHERE id = ?';
    connection.query(sql, [userId], (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      res.json({ message: 'User deleted successfully' });
    });
  });
  

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
