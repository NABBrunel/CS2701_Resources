import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const linkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/register" className={linkClass}>
            Register
          </NavLink>
        </li>

        <li>
          <NavLink to="/stories" className={linkClass}>
            Stories
          </NavLink>
        </li>

        <li>
          <NavLink to="/community" className={linkClass}>
            Community
          </NavLink>
        </li>

        <li>
          <NavLink to="/videos" className={linkClass}>
            Videos
          </NavLink>
        </li>

      </ul>

      <button onClick={toggleDarkMode} className="darkmode-btn">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}