import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/signup';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur serveur');

      if (isLogin) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        
        setTimeout(() => {
          navigate('/feed');
        }, 100);
      } else {
        setMessage('Compte créé ! Connectez-vous');
        setIsLogin(true);
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="page-title">Session Surf Club</div>
      <div className="auth-card">
        <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              name="username"
              placeholder="Nom d'utilisateur"
              value={form.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? 'Se connecter' : 'Créer un compte'}</button>
        </form>
        <p>
          {isLogin ? "Pas encore inscrit ?" : "Déjà un compte ?"}{' '}
          <span className="toggle" onClick={toggleMode}>
            {isLogin ? "Créer un compte" : "Se connecter"}
          </span>
        </p>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Login;
