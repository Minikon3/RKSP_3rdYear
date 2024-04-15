import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', role: '', description: '' });
  const userData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      await axios.post('http://localhost:5000/api/users', newUser);
      setNewUser({ username: '', password: '', role: '', description: '' });
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } // Обновление списка пользователей после создания нового пользователя
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } // Обновление списка пользователей после удаления пользователя
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  if (!userData) {
    return <div>Please login to view.</div>;
  }
  if (userData.role !== 'admin') {
    return <div>Please login as Admin to view.</div>;
  }

  return (
    <div>
      <Navigation />
      <h2>Admin Panel</h2>
      <div>
        <h3>Create New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newUser.description}
          onChange={(e) => setNewUser({ ...newUser, description: e.target.value })}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Username: {user.username}, Role: {user.role}, Description: {user.description}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
