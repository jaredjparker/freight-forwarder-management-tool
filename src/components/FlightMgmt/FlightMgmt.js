import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllFlights } from './../../ducks/users';
import { Link } from 'react-router-dom';
import logo from './../AirlineMgmt/logo.svg';

class FlightMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightInfo: {}
    }
  }

  componentDidMount() {
    this.props.getAllFlights();
    console.log(this.props.flights);
  }

  render() {
    const flights = this.props.flights;
    const airlineList = flights.map((airline, i) => {
      return (
          <div className='airlinemrec' key={i}>
            <div className='chaos'><p className='reclineitem'>Flight ID:</p><p className='reclineitem'>{airline.flight_id}</p></div>
            <div className='chaos'><p className='reclineitem'>Chargeable Weight:</p><p className='reclineitem'>{airline.chargeable_weight}</p></div>
            <div className='chaos'><p className='reclineitem'>Customer Rate:</p><p className='reclineitem'>{airline.air_freight}</p></div>
          </div>      
      )
    });

    return (
      <div className="airlinemanagement">
        <div className='airlinemheader'>
          <img src={logo} alt="" />
          <h1 className='airlinemh'>Flight Management</h1>
          <a href='http://localhost:3005/auth/logout'><button className='bton'><span>Log out</span></button></a>
        </div>
        <div className='airmgmtleftpanel'>
          <Link to='/profitcomparison'>
            <button className='bton'><span>Profit Comparison</span></button>
          </Link>
        </div>
        {airlineList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flights: state.flights
  }
}

export default connect(mapStateToProps, { getAllFlights })(FlightMgmt);
