// ListPage.js
import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/ListPage.css';

function ListPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="content">
        <h2>Список</h2>
        <ul>
          <li>Элемент 1</li>
          <li>Элемент 2</li>
          <li>Элемент 3</li>
        </ul>
      </div>
    </div>
  );
}

export default ListPage;
