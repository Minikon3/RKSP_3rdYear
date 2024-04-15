// Login.js

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = [
      {
        name: 'Paimon',
        roles: ['user'],
        rights: ['can_view_articles']
      },
      {
        name: 'Traveler',
        roles: ['admin', 'user'],
        rights: ['can_edit_articles', 'can_delete_articles']
      }
    ];
    
    const user = users.find(user => user.name === username && password === 'password');
    
    if (user) {
      onLogin(user);
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Логин:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Пароль:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
