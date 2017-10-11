import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import {getUserInfo} from './../../ducks/users';
import {connect} from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {}
    }
  }

  componentDidMount() {
    this.props.getUserInfo()
    console.log(this.props.user);
  }

  render() {
    const user = this.props.user;
    return (
      <div className="App">
        <p>Dashboard</p>

        <p>{user.id ? user.user_name : null}</p>
        <p>{user.id ? user.email : null}</p>
        <p>{user.id ? user.auth_id : null}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state from private' + state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUserInfo})(Dashboard);
