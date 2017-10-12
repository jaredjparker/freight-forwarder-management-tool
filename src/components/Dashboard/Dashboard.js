import React, { Component } from 'react';
import './Dashboard.css';
import { getUserInfo } from './../../ducks/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }
  }

  componentDidMount() {
    this.props.getUserInfo();
    console.log(this.props.user);
  }

  render() {
    const user = this.props.user;
    return (
      <div className="dashboard">
        <div className='dashHeader'>
          <img src={logo} alt="" />
          <h1>Dashboard</h1>
          <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
        </div>
        <div><Link to='/airlinemgmt'><button className='btn'><span>Airline Management</span></button></Link></div>
        <div className='data'>
        <h4>
          <p>Username: {user.id ? user.user_name : null}</p>
          <p>Email: {user.id ? user.email : null}</p>
          <p>ID: {user.id ? user.auth_id : null}</p>
        </h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state from dashboard', state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getUserInfo })(Dashboard);
