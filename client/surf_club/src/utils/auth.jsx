export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token && token.length > 10;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
