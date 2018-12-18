import React, { Component } from 'react';
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
        <Link to='/airlinerecord' key={i}>
          <div className='airlinemrec' onClick={() => this.props.getOneAirline(airlines[i].airline_id)}>
            <div className='chaos'><p className='reclineitem'>Airline Name:</p><p className='reclineitem'>{airline.airline_name}</p></div>
            <div className='chaos'><p className='reclineitem'>Airline Code:</p><p className='reclineitem'>{airline.iata_airline_code}</p></div>
            <div className='chaos'><p className='reclineitem'>Airline Type:</p><p className='reclineitem'>{airline.airline_type}</p></div>
          </div>
        </Link>
      )
    });

    return (
      <div className="airlinemanagement">
        <div className='airlinemheader'>
          <img src={logo} alt="" />
          <h1 className='airlinemh'>Airline Management</h1>
          <a href={process.env.REACT_APP_LOGOUT}><button className='bton'><span>Log out</span></button></a>
        </div>
        <div className='airmgmtleftpanel'>
          <Link to='/profitcomparison'>
            <button className='bton'><span>Profit Comparison</span></button>
          </Link>
          <Link to='/airlinenewrecord'>
            <button className='bton'><span>New Airline</span></button>
          </Link>
        </div>
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
