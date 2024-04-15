import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const userData = JSON.parse(localStorage.getItem('user'));

  const handleGetUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUser(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch user. Please check the user ID.');
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
      <h2>User Detail</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleGetUser}>Get User</button>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
          <p>Role: {user.role}</p>
          <p>Description: {user.description}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
