import React, { useState } from 'react';
import '../styles/PostCard.css';

function PostCard({ session }) {
  const [likes, setLikes] = useState(0); // compteur local
  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="post-card">
      {session.image && <img src={session.image} alt="vague" className="post-image" />}
      <div className="post-content">
        <h3>{session.spot}</h3>
        <p>{session.conditions}</p>
        <div className="post-stars">
         {Array.from({ length: 5 }, (_, i) => (
         <span key={i}>
        {i < session.note ? '⭐' : '☆'}
         </span>
         ))}
    </div>

        <p>{session.caption}</p>
        <p className="post-meta">Posté par : {session.author}</p>

        <div className="post-actions">
          <button onClick={handleLike}>❤️ {likes}</button>
          <button onClick={() => alert('Commentaires à venir')}>💬 Commenter</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
