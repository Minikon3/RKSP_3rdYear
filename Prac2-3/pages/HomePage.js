// HomePage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="content">
        <h2>Добро пожаловать на мой сайт!</h2>
        <p>Это простая страница на React.</p>
      </div>
    </div>
  );
}

export default HomePage;
