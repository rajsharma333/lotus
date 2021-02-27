import React, { useState } from 'react';
import { connect } from 'react-redux';
import registerUser from '../../actions/auth';
import axios from 'axios';

const Register = ({ registerUser }) => {
  const [newUser, setNewUser] = useState({
      name: '',
      email: '',
      password: ''
  });

  const { name, email, password } = newUser;

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value});
    //console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);
    registerUser({ name, email, password });

  };

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit} className="login-wrapper">
      <div className="content-section register">
        <div className="display-block">
          <p>Click here to Login</p>
          <button className="btn btn-primary-white">LOGIN</button>
        </div>
      </div>
      <div className="form-section register">
        <h3>Register</h3>
        <input
          type="text"
          name="email"
          required
          autocomplete="off"
          placeholder="Official Email"
          value={newUser.email}
          onChange={handleChange}/>
          <input
            type="text"
            name="name"
            required
            autocomplete="off"
            placeholder="Full Name"
            value={newUser.name}
            onChange={handleChange}/>
          <input
            type="password"
            name="password"
            required
            autocomplete="off"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}/>
        <button type="submit" className="btn btn-primary">Register</button>
      </div>
    </form>
    </React.Fragment>
  )
}


export default connect(null, { registerUser } )(Register);
