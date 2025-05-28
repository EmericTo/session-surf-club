import React, { useState } from 'react';
import '../styles/SessionForm.css';

function SessionForm() {
  const [form, setForm] = useState({
    spot: '',
    conditions: '',
    note: 3,
    image: '',
    caption: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Session postée ✅', form);
    // 🚧 Plus tard : appel API pour sauvegarder dans MongoDB
    setForm({ spot: '', conditions: '', note: 3, image: '' });
  };

  return (
    <div className="session-form-card">
      <h3>Partager une session 🏄</h3>
      <form onSubmit={handleSubmit} className="session-form">
        <input
          type="text"
          name="spot"
          placeholder="Nom du spot"
          value={form.spot}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="conditions"
          placeholder="Conditions (houle, vent, marée)"
          value={form.conditions}
          onChange={handleChange}
        />
        <div className="star-rating">
        {Array.from({ length: 5 }, (_, i) => (
            <span
            key={i}
            className={i < form.note ? 'star filled' : 'star'}
            onClick={() => setForm({ ...form, note: i + 1 })}
            >
            {i < form.note ? '⭐' : '☆'}
            </span>
        ))}
        </div>

        <input
          type="text"
          name="image"
          placeholder="URL de la photo (optionnel)"
          value={form.image}
          onChange={handleChange}
        />
        <input
            name="caption"
            placeholder="Ajoute une légende ou un commentaire..."
            value={form.caption}
            onChange={handleChange}
        />
        <button type="submit">Poster la session</button>
      </form>
    </div>
  );
}

export default SessionForm;
