import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ForumPage from './ForumPage';
import VideosPage from './VideosPage';
import AddVideoPage from './AddVideoPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import './style.css';
import { Outlet } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import StoriesPage from './StoriesPage';

function Layout({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
    </>
  );
} 

function Main() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const [videos, setVideos] = useState([]);

  const addVideoToFeed = (video) => {
    setVideos(prev => [...prev, video]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="community" element={<ForumPage />} />
          <Route path="videos" element={<VideosPage videos={videos} />} />
          <Route path="add" element={<AddVideoPage addVideoToFeed={addVideoToFeed} />} />
          <Route path="forum" element={<ForumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);