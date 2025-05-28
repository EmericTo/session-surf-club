import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Feed from './pages/Feed';
import { isAuthenticated } from './utils/auth';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // Vérifie le token à chaque render (ex: après login)
    setAuth(isAuthenticated());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/feed"
        element={auth ? <Feed /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
