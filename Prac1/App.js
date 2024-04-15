// App.js
import React from 'react';
import './App.css';
import HomePage from './HomePage'; // Импортируем созданный компонент

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage /> {/* Используем компонент HomePage */}
      </header>
    </div>
  );
}

export default App;
