import React from 'react';
import TopNavBar from '../components/TopNavBar';
import SidebarProfile from '../components/SidebarProfile';
import SessionForm from '../components/SessionForm';
import SessionFeed from '../components/SessionFeed';
import '../styles/Feed.css';

function Feed() {
  return (
    <div className="feed-page">
      <TopNavBar />
      <div className="feed-content">
        <SidebarProfile />
        <main className="feed-main">
          <SessionForm />
          <SessionFeed />
        </main>
      </div>
    </div>
  );
}

export default Feed;
