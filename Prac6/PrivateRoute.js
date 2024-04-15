// PrivateRoute.js

import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './App';
import Dashboard from './Dashboard'; // Импортируем компонент Dashboard

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Route element={<Dashboard />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
