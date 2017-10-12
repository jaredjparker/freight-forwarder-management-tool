import React, { Component } from 'react';
import './AirlineMgmt.css';
import { getAllAirlines } from './../../ducks/users';
import { connect } from 'react-redux';

class AirlineMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightInfo: {}
    }
  }

  componentDidMount() {
    this.props.getAllAirlines()
  }

  render() {
    // const airlines = JSON.stringify(this.props.airlines)
    // console.log('here are all of the airlines', airlines);
    console.log('Object passed through props', this.props.airlines)

    const airlineList = this.props.airlines.map((airline) => {
      return (
        <div className='airrec' key={airline.id}>
          <p>{airline.airline_name}</p>
          <p>{airline.iata_airline_code}</p>
          <p>{airline.airline_type}</p>
        </div>
      )
    });

    return (
      <div className="App">
        <h2>Airline Management</h2>
        <button>New</button>
        <div><a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
        </div>
        {airlineList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    airlines: state.airlines
  }
}

export default connect(mapStateToProps, { getAllAirlines })(AirlineMgmt);
