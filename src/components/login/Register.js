import React, { useState } from 'react';
import { connect } from 'react-redux';
import registerUser from '../../actions/auth';

const Register = ({ registerUser }) => {
  const [userData, setUserData] = useState({
      name: '',
      email: '',
      password: ''
  });

  const { name, email, password } = userData;

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
    //console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(userData);
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
          value={userData.email}
          onChange={handleChange}/>
          <input
            type="text"
            name="name"
            required
            autocomplete="off"
            placeholder="Full Name"
            value={userData.name}
            onChange={handleChange}/>
          <input
            type="password"
            name="password"
            required
            autocomplete="off"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}/>
        <button type="submit" className="btn btn-primary">Register</button>
      </div>
    </form>
    </React.Fragment>
  )
}

export default connect(null, { registerUser } )(Register);
