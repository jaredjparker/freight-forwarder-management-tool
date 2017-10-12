import React, { Component } from 'react';
import './Login.css';
import logo from './logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className='logbox'>
        <img className='currency' src={logo} alt="" />
        <a href={process.env.REACT_APP_LOGIN}><button className='btn'><span>Login</span></button></a>
        </div>
      </div>
    );
  }
}

export default Login;
