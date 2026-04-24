import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Get user data from localStorage
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        
        // Update time every minute
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);
        
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    const getGreeting = () => {
        const hour = currentTime.getHours();
        if (hour < 12) return "Good Morning";
        if (hour < 18) return "Good Afternoon";
        return "Good Evening";
    };

    const getWelcomeMessage = () => {
        if (user) {
            return (
                <>
                    <span className="welcome-emoji">🪶</span>
                    <span className="welcome-text">Welcome back, {user.name}!</span>
                    <span className="welcome-emoji">🪶</span>
                </>
            );
        } else {
            return (
                <>
                    <span className="welcome-emoji">🏕️</span>
                    <span className="welcome-text">Hello, Guest!</span>
                    <span className="welcome-emoji">🏕️</span>
                </>
            );
        }
    };

    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="home-header">
                <div className="logo-section">
                    <span className="logo-icon">🌿</span>
                    <h1 className="app-title">Indigenous Roots</h1>
                    <span className="logo-icon">🌿</span>
                </div>
                {user && (
                    <button onClick={handleLogout} className="logout-btn">
                        <span>🚪</span> Logout
                    </button>
                )}
            </header>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <p className="greeting">{getGreeting()},</p>
                    <div className="welcome-message">
                        {getWelcomeMessage()}
                    </div>
                    <p className="tagline">Connecting Traditions • Preserving Heritage • Building Community</p>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2 className="section-title">Discover Indigenous Wisdom</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">📚</div>
                        <h3>Traditional Stories</h3>
                        <p>Explore ancient legends and oral traditions passed down through generations.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎨</div>
                        <h3>Art & Crafts</h3>
                        <p>Learn traditional art techniques and connect with Indigenous artisans.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🌱</div>
                        <h3>Medicinal Plants</h3>
                        <p>Discover the healing wisdom of native plants and natural remedies.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎵</div>
                        <h3>Traditional Music</h3>
                        <p>Listen to authentic Indigenous music and ceremonial songs.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🗣️</div>
                        <h3>Language Lessons</h3>
                        <p>Learn Indigenous languages and preserve linguistic heritage.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🤝</div>
                        <h3>Community Events</h3>
                        <p>Join gatherings, workshops, and cultural celebrations.</p>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="quote-section">
                <div className="quote-content">
                    <p className="quote-text">"We do not inherit the earth from our ancestors; we borrow it from our children."</p>
                    <p className="quote-author">- Indigenous Proverb</p>
                </div>
            </div>

            {/* Footer */}
            <footer className="home-footer">
                <p>© 2024 Indigenous Roots App - Celebrating Indigenous Culture & Heritage</p>
                <div className="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
}