import React, { useState} from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const UpdateUser = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [newUserData, setNewUserData] = useState({ username: '', password: '', role: '', description: '' });
  const [error, setError] = useState('');
  const currentUser = JSON.parse(localStorage.getItem('user'));

  const handleGetUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUserData(response.data);
      setNewUserData(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch user. Please check the user ID.');
    }
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}`, newUserData);
      setNewUserData({ username: '', password: '', role: '', description: '' });
      setError('');
    } catch (error) {
      setError('Failed to update user.');
    }
  };

  if (!currentUser) {
    return <div>Please login to view.</div>;
  }
  if (currentUser.role !== 'admin') {
    return <div>Please login as Admin to view.</div>;
  }

  return (
    <div>
        <Navigation />
      <h2>Update User</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleGetUser}>Get User</button>
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h3>User Info</h3>
          <p>ID: {userData.id}</p>
          <p>Username: {userData.username}</p>
          <p>Password: {userData.password}</p>
          <p>Role: {userData.role}</p>
          <p>Description: {userData.description}</p>
          <h3>Update User</h3>
          <input
            type="text"
            placeholder="Username"
            value={newUserData.username}
            onChange={(e) => setNewUserData({ ...newUserData, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={newUserData.password}
            onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={newUserData.role}
            onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newUserData.description}
            onChange={(e) => setNewUserData({ ...newUserData, description: e.target.value })}
          />
          <button onClick={handleUpdateUser}>Update User</button>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
