import React, { Component } from 'react';
import './AirlineMgmt.css';
import { getAllFlights } from './../../ducks/users';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class AirlineMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightInfo: {}
    }
  }

  componentDidMount() {
    this.props.getAllFlights()
  }

  render() {
    const flights = this.props.flights;
    return (
      <div className="App">
        <h1>Airline Management</h1>
        <h4>
          Stuff
        </h4>
        <div><a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state from airlineMgmt' + state)
  return {
    flights: state.flights
  }
}

export default connect(mapStateToProps, { getAllFlights })(AirlineMgmt);
