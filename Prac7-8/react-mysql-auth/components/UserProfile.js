import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navigation';

const UserProfile = ({ user }) => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);
  const [description, setDescription] = useState(userData.description);
  const handleUpdateDescription = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userData.id}`, { description });
    } catch (error) {
      console.error('Failed to update description:', error);
    }
  };
  if (!userData) {
    return <div>Please login to view your profile.</div>;
  }

  return (
    <div>
      <Navigation />
      <h2>User Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Role: {userData.role}</p>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleUpdateDescription}>Update Description</button>
    </div>
  );
};

export default UserProfile;
