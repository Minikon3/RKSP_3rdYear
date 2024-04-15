import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const UserList = () => {
  const [users, setUsers] = useState([]);
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
  if (!userData){
    return <div>Please login to view.</div>;
  }
    if (userData.role !== "admin") {
        return <div>Please login as Admin to view.</div>;
    }

  return (
    <div>
      <Navigation />
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Username: {user.username}, Role: {user.role}, Description: {user.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
