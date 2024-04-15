// Dashboard.js

import React, { useContext } from 'react';
import { AuthContext } from './App';

const Dashboard = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleLogout = () => {
    // Удаляем данные пользователя из localStorage и обновляем текущего пользователя
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Привет, {currentUser.name}!</p>
      <p>Роли: {currentUser.roles.join(', ')}</p>
      <p>Права: {currentUser.rights.join(', ')}</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Dashboard;
