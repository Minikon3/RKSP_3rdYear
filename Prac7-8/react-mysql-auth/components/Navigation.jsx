// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
        <li>
          <Link to="/users">User List</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/usercheck">Check User</Link>
        </li>
        <li>
          <Link to="/userupdate">Update User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
