import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AddItem } from './components/AddItem';
import LoginForm from './components/LoginForm';
import Home from './Pages/Home/Home.tsx';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (_username: string, _password: string) => {
    console.log(_username, _password);
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {isLoggedIn && <li><Link to="/add-item">Add Item</Link></li>}
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <Link to="/login"><button>Login</button></Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> {}
        <Route path="/add-item" element={isLoggedIn ? <AddItem /> : <p>Please log in to add items.</p>} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;


