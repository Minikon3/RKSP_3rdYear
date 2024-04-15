// HomePage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/MainStyle.css'; // Импорт стилей

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>Home Page</h1>
      <p>Welcome to our messaging app!</p>
    </div>
  );
};

export default HomePage;
