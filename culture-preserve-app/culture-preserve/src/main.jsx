import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import ForumPage from './ForumPage';
import VideosPage from './VideosPage';
import AddVideoPage from './AddVideoPage';
import './style.css';

function Main() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    document.body.classList.toggle('dark-mode', !darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  const [videos, setVideos] = useState([]);

  const addVideoToFeed = (video) => {
    setVideos(prev => [...prev, video]);
  };

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<ForumPage />} />
        <Route path="/videos" element={<VideosPage videos={videos} />} />
        <Route path="/add" element={<AddVideoPage addVideoToFeed={addVideoToFeed} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
