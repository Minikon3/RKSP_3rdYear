import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgreementForm from './pages/AgreementForm';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgreementForm />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
