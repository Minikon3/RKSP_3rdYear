// DialogPage.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../styles/MainStyle.css'; // Импорт стилей

const DialogPage = ({ dialogs }) => {
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);

  const selectDialog = (index) => {
    setCurrentDialogIndex(index);
  };

  return (
    <div>
        <Header />
        <Navigation />
      <h1>Dialogs</h1>
      <ul>
        {dialogs.map((dialog, index) => (
          //<li key={dialog.id}>
            <button onClick={() => selectDialog(index)}>Диалог {dialog.id}</button>
          //</li>
        ))}
      </ul>
      {currentDialogIndex !== null && (
        <div>
          <h2>{dialogs[currentDialogIndex].participants[0]} и {dialogs[currentDialogIndex].participants[1]}</h2>
          <ul>
            {dialogs[currentDialogIndex].messages.map((message, index) => (
              <li key={index}>
                <strong>{message.sender}:</strong> {message.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DialogPage;
