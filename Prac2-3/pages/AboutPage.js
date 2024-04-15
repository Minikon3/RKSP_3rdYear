// AboutPage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="content">
        <h2>О нас</h2>
        <p>Мы - команда разработчиков, создающая интересные проекты.</p>
      </div>
    </div>
  );
}

export default AboutPage;
