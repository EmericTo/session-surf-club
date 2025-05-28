import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TopNavBar.css';

function TopNavBar() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;


  return (
    <header className="top-navbar">
      <div className="logo" onClick={() => navigate('/feed')}>
        🏄 Social Surf Club
      </div>
      <div className="nav-actions">
        <input type="text" placeholder="Rechercher un spot ou un surfeur..." className="search-input" />
        <button onClick={() => navigate('/messages')}>💬</button>
        <button onClick={() => navigate('/profile')}>{user?.username}</button>
      </div>
    </header>
  );
}

export default TopNavBar;
