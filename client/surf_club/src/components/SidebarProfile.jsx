import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
import '../styles/SidebarProfile.css';

function SidebarProfile() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="sidebar-profile">
      <div className="profile-card">
        <img
          src={`https://api.dicebear.com/6.x/big-smile/svg?seed=${user?.username || 'surf'}`}
          alt="avatar"
          className="avatar"
        />
        <h3>{user?.username}</h3>
        <p>{user?.email}</p>
        <button onClick={handleLogout} className="logout-btn">Se déconnecter</button>
      </div>
    </aside>
  );
}

export default SidebarProfile;
