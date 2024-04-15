// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <Router>
      <div>
        <h1>Мое приложение</h1>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
        {currentUser && (
          <div>
            <p>Привет, {currentUser.name}!</p>
            <p>Роли: {currentUser.roles.join(', ')}</p>
            <p>Права: {currentUser.rights.join(', ')}</p>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
