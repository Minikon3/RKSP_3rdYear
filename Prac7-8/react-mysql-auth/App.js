import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import AdminPanel from './components/AdminPanel';
import UserList from './components/UserList';
import Logout from './components/Logout';
import UserDetail from './components/UserDetail';
import UpdateUser from './components/UpdateUser';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/usercheck" element={<UserDetail />} />
        <Route path="/userupdate" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
};

export default App;
