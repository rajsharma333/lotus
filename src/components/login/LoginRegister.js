import React from 'react';
import './login.css';
import Login from './Login';
import Register from './Register';

const LoginRegister = () => {
  return (
    <div className="App">
      <div className="login-wrapper login">
        <Login />
      </div>
      <div className="login-wrapperr register">
        <Register />
      </div>
    </div>
  )
}

export default LoginRegister;
