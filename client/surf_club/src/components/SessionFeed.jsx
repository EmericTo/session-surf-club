import React from 'react';
import PostCard from './PostCard';
import '../styles/SessionFeed.css';

// Données mock (temporaire, à remplacer par un fetch plus tard)
const mockSessions = [
  {
    id: 1,
    spot: 'Hossegor',
    conditions: 'Houle 1.5m, vent offshore, marée haute',
    note: 5,
    caption: 'incroyable session, les vagues étaient super fun',
    image: 'https://source.unsplash.com/800x400/?surf',
    author: 'Leo',
  },
  {
    id: 2,
    spot: 'Biarritz',
    conditions: 'Houle 1m, vent side, marée basse',
    note: 3,
    image: '',
    author: 'Nina',
  }
];

function SessionFeed() {
  return (
    <div className="session-feed">
      {mockSessions.map((session) => (
        <PostCard key={session.id} session={session} />
      ))}
    </div>
  );
}

export default SessionFeed;
