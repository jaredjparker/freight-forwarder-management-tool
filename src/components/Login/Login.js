import React, { Component } from 'react';
import './Login.css';
import logo from './logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="" />
        <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
      </div>
    );
  }
}

export default Login;
