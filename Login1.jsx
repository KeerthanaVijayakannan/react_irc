import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password, 'Remember Me:', rememberMe);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'rgba(0, 31, 63, 0.8)' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '350px', width: '90%' }}>
        <h2>Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '9px', boxSizing: 'border-box' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe" style={{ marginLeft: '5px', color: 'black' }}>Remember Me</label>
            </div>

            <div style={{ marginLeft: '10px', cursor: 'pointer', color: 'blue' }} onClick={handleForgotPassword}>
              <span>Forgot Password?</span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleLogin}
            style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
          ><Link to='/dashboard'>
            Login
            </Link>
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;
