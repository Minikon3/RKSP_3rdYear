// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DialogPage from './pages/DialogPage';

const dialogs = [
  {
    id: 1,
    participants: ['Alice', 'Bob'],
    messages: [
      { sender: 'Alice', text: 'Привет, Боб!' },
      { sender: 'Bob', text: 'Привет, Алиса! Как дела?' },
      { sender: 'Alice', text: 'Хорошо, спасибо. Как у тебя?' }
    ]
  },
  {
    id: 2,
    participants: ['John', 'Maria'],
    messages: [
      { sender: 'John', text: 'Привет, Мария!' },
      { sender: 'Maria', text: 'Здравствуй, Джон! Чем занимаешься?' },
      { sender: 'John', text: 'Я работаю над проектом. А ты?' }
    ]
  },
  {
    id: 3,
    participants: ['Kate', 'Michael'],
    messages: [
      { sender: 'Kate', text: 'Привет, Майкл!' },
      { sender: 'Michael', text: 'Привет, Кейт! Как прошел твой день?' },
      { sender: 'Kate', text: 'Все прошло хорошо, спасибо. А у тебя?' }
    ]
  }
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dialogs" element={<DialogPage dialogs={dialogs} />} />
      </Routes>
    </Router>
  );
};

export default App;
