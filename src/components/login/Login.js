import React from 'react';

const Login = () => {

  return (
    <React.Fragment>
      <div className="form-section login">
        <h3>Login</h3>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Passowrd"/><br/>
        <button className="btn btn-primary">Login</button><br/><br/><br/><br/><br/>
        <a className="display-block" here="">Forgot Password</a>
      </div>
      <div className="content-section login">
        <div className="display-block">
          <p>Click here to Register</p>
          <button className="btn btn-primary-white">REGISTER</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login;
