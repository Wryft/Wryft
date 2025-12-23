import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });

  };

  const handleRegister = () => {
    console.log('Register clicked (Ts works yayyyyy)');

  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
          <img src="/Wryft.jpeg" alt="Wryft Logo" className="logo-image" />
        </div>
        
        <h1 className="login-title">Sign in to Wryft</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email (or username)</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>
        
        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
      
      <div className="footer-text">
        A Warehouser Production YAAYAYYYY ITS CHRISTMAS TMRW
      </div>
    </div>
  );
};

export default LoginPage;