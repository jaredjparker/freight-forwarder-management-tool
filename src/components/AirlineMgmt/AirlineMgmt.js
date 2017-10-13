import React, { Component } from 'react';
import './AirlineMgmt.css';
import { getAllAirlines, getOneAirline } from './../../ducks/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class AirlineMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightInfo: {}
    }
  }

  componentDidMount() {
    this.props.getAllAirlines();
  }

  render() {
    const airlines = this.props.airlines;
    const airlineList = airlines.map((airline, i) => {
      return (
        <Link to='/airlinerecord'>
          <div className='airrec' key={i} onClick={() => console.log('Div onClick', airlines[i].airline_id)}>
            <p >{airline.airline_id}</p>
            <p>{airline.airline_name}</p>
            <p>{airline.iata_airline_code}</p>
            <p>{airline.airline_type}</p>
          </div>
        </Link>
      )
    });

    return (
      <div className="airlinemgmt">
        <div className='airheader'>
          <img src={logo} alt="" />
          <h2>Airline Management</h2>
          <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
        </div>
        <button className='btn' onClick={() => this.props.getOneAirline(4)}><span>Invoke</span></button>
        <button className='btn' onClick={() => console.log('airlineSingular props', this.props.airlineSingular)}><span>Console</span></button>
        {airlineList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    airlines: state.airlines,
    airlineSingular: state.airlineSingular
  }
}

const mapDispatchToProps = { getAllAirlines, getOneAirline }

export default connect(mapStateToProps, mapDispatchToProps)(AirlineMgmt);
