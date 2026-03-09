import React, { useState, useEffect } from 'react';
import './ForumPage.css';


function ForumPage() {
  const [user, setUser] = useState(() => {
    try {
      return localStorage.getItem('username') || null;
    } catch {
      return null;
    }
  });

  const initialForums = [
  {
    id: 1,
    name: "General Discussion",
    description: "Talk about anything related to Indigenous culture."
  },
  {
    id: 2,
    name: "Stories & Teachings",
    description: "Share knowledge, stories, and traditions."
  }
];

  const [forums, setForums] = useState(() => {
    try {
      const saved = localStorage.getItem('forums');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return initialForums;
    } catch (error) {
      console.error('Error loading forums:', error);
      return initialForums;
    }
  });

  const [currentForum, setCurrentForum] = useState('');
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('forumMessages');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error loading messages:', error);
      return {};
    }
  });

  const [input, setInput] = useState('');
  const [showNewForumModal, setShowNewForumModal] = useState(false);
  const [newForumName, setNewForumName] = useState('');
  const [newForumDesc, setNewForumDesc] = useState('');

  useEffect(() => {
    if (forums.length > 0 && !currentForum) {
      setCurrentForum(forums[0].name);
    }
  }, [forums, currentForum]);

  useEffect(() => {
    try {
      localStorage.setItem('forums', JSON.stringify(forums));
    } catch (error) {
      console.error('Error saving forums:', error);
    }
    
    try {
      localStorage.setItem('forumMessages', JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  }, [forums, messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    if (!user) {
      alert('Please login first to send messages');
      handleLogin();
      return;
    }
    
    const author = user;
    const newMessage = {
      id: Date.now(),
      user: author,
      text: input.trim(),
      timestamp: new Date().toISOString(),
      forum: currentForum
    };
    
    setMessages(prev => ({
      ...prev,
      [currentForum]: [newMessage, ...(prev[currentForum] || [])]
    }));
    setInput('');
  };

  const handleAddForum = () => {
    const name = newForumName.trim();
    const desc = newForumDesc.trim();
    
    if (!name) {
      alert('Forum name cannot be empty');
      return;
    }
    
    if (forums.some(f => f.name.toLowerCase() === name.toLowerCase())) {
      alert('A forum with this name already exists');
      return;
    }

    const newForum = {
      id: Date.now(),
      name,
      description: desc || `Discussion about ${name}`
    };
    
    setForums(prev => [...prev, newForum]);
    setNewForumName('');
    setNewForumDesc('');
    setShowNewForumModal(false);
    setCurrentForum(name);
  };

  const handleLogin = () => {
    const name = prompt('Enter your username:');
    if (name && name.trim()) {
      const trimmedName = name.trim();
      setUser(trimmedName);
      try {
        localStorage.setItem('username', trimmedName);
      } catch (error) {
        console.error('Error saving username:', error);
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('username');
    } catch (error) {
      console.error('Error removing username:', error);
    }
  };

  const handleDeleteMessage = (messageId, forumName) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    
    setMessages(prev => {
      const forumMessages = prev[forumName] || [];
      const updatedMessages = forumMessages.filter(msg => msg.id !== messageId);
      
      if (updatedMessages.length === 0) {
        const { [forumName]: _, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [forumName]: updatedMessages
      };
    });
  };

  const handleDeleteForum = (forumName) => {
    if (!window.confirm(`Are you sure you want to delete the "${forumName}" forum? This will also delete all messages in it.`)) return;
    
    if (forums.length <= 1) {
      alert('Cannot delete the last forum');
      return;
    }
    
    setForums(prev => prev.filter(f => f.name !== forumName));
    
    setMessages(prev => {
      const { [forumName]: _, ...rest } = prev;
      return rest;
    });
    
    if (currentForum === forumName) {
      const otherForum = forums.find(f => f.name !== forumName);
      if (otherForum) {
        setCurrentForum(otherForum.name);
      }
    }
  };

  return (
    <div className="forum-page">
      <aside className="sidebar">
        <div className="user-controls">
          {user ? (
            <>
              <div className="user-info">
                Logged in as: <strong>{user}</strong>
              </div>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button className="login-btn" onClick={handleLogin}>Login</button>
          )}
          <button className="add-forum-btn" onClick={() => setShowNewForumModal(true)}>
            Add New Forum
          </button>
        </div>

        <h3 className="forums-title">Forums ({forums.length})</h3>
        <ul className="forums-list">
          {forums.map(f => (
            <li
              key={f.id || f.name}
              className={`forum-item ${currentForum === f.name ? 'selected' : ''}`}
              onClick={() => setCurrentForum(f.name)}
            >
              <div className="forum-info">
                <strong className="forum-name">{f.name}</strong>
                <div className="forum-description">{f.description}</div>
                <div className="forum-message-count">
                  {(messages[f.name] || []).length} messages
                </div>
              </div>
              {forums.length > 1 && (
                <button
                  className="delete-forum-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteForum(f.name);
                  }}
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-forum">
        <header className="forum-header">
          <h2 className="current-forum-title">
            {currentForum || 'Select a Forum'}
            {forums.find(f => f.name === currentForum)?.description && 
              ` - ${forums.find(f => f.name === currentForum).description}`
            }
          </h2>
          {user && (
            <div className="posting-as">
              Posting as: <strong>{user}</strong>
            </div>
          )}
        </header>

        <div className="messages-container">
          {(messages[currentForum] || []).length === 0 ? (
            <div className="no-messages">
              No messages yet. Be the first to post in this forum!
            </div>
          ) : (
            (messages[currentForum] || []).map(msg => (
              <div key={msg.id} className="message-card">
                <div className="message-header">
                  <div className="message-author">
                    <strong className="author-name">{msg.user}</strong>
                    <span className="message-timestamp">
                      {new Date(msg.timestamp).toLocaleString()}
                    </span>
                  </div>
                  {msg.user === user && (
                    <button
                      className="delete-message-btn"
                      onClick={() => handleDeleteMessage(msg.id, currentForum)}
                    >
                      Delete
                    </button>
                  )}
                </div>
                <div className="message-content">
                  {msg.text}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="input-area">
          <input
            type="text"
            className="message-input"
            placeholder={user ? `Write a message in ${currentForum}...` : 'Please login to post'}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            disabled={!user}
          />
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={!user || !input.trim()}
          >
            Send
          </button>
        </div>
      </main>

      {showNewForumModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">Create New Forum</h3>
            <div className="form-group">
              <label className="form-label">Forum Name *</label>
              <input
                type="text"
                className="modal-input"
                placeholder="Enter forum name"
                value={newForumName}
                onChange={e => setNewForumName(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="modal-input"
                placeholder="Enter forum description (optional)"
                value={newForumDesc}
                onChange={e => setNewForumDesc(e.target.value)}
              />
            </div>
            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowNewForumModal(false)}
              >
                Cancel
              </button>
              <button
                className="create-btn"
                onClick={handleAddForum}
                disabled={!newForumName.trim()}
              >
                Create Forum
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForumPage;