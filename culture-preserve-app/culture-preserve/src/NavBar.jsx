import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Stories">Stories</Link></li>
        <li><Link to="/">Community</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/About">About</Link></li>
        <li>
          <button onClick={toggleDarkMode} className="darkmode-btn">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
