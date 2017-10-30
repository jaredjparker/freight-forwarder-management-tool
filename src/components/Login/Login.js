import React, { Component } from 'react';
import logo from './logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className='logbox'>
          <img className='currency' src={logo} alt="" />
          <div className='logrow'>
            <a href={process.env.REACT_APP_LOGIN}><button><span>Login</span></button></a>
            <a href={process.env.REACT_APP_LOGIN}><button><span>Register</span></button></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;