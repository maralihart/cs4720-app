import React, { useState } from 'react';
import Login from './components/Login/Login';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    !authenticated && <Login />
  );
}
