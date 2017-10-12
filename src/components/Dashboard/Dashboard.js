import React, { Component } from 'react';
import './Dashboard.css';
import { getUserInfo } from './../../ducks/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }
  }

  componentDidMount() {
    this.props.getUserInfo()
  }

  render() {
    const user = this.props.user;
    return (
      <div className="App">
        <h1>Dashboard</h1>
        <div><Link to='/airlinemgmt'><button>Airline Management</button></Link></div>
        <h4>
          <p>Username: {user.id ? user.user_name : null}</p>
          <p>Email: {user.id ? user.email : null}</p>
          <p>ID: {user.id ? user.auth_id : null}</p>
        </h4>
        <div><a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state from dashboard' + state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getUserInfo })(Dashboard);
