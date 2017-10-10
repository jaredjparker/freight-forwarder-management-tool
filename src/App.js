import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import CargoMgmt from './components/CargoMgmt/CargoMgmt';
import AirlineMgmt from './components/AirlineMgmt/AirlineMgmt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Personal Project</p>
        <Login />
        <Dashboard />
        <CargoMgmt />
        <AirlineMgmt />
      </div>
    );
  }
}

export default App;
