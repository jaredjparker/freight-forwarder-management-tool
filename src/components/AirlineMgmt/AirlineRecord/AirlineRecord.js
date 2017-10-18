import React, { Component } from 'react';
import './AirlineRecord.css';
import { connect } from 'react-redux'
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class AirlineRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordInfo: {}
        }
    }

    render() {
        const airlineSingular = this.props.airlineSingular;

        return (
            <div className='airlinerecord'>
                <div className='recheader'>
                    <img src={logo} alt="" />
                    <p>Airline Record View</p>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='barbox'>
                    <Link to='/airlinemgmt'><button className='btn'><span>Airline Management</span></button></Link>
                    <Link to='/airlinemgmt'><button className='btn'><span>Cancel</span></button></Link>
                    <div className='recborder'>
                        <p>Airline Name: {airlineSingular.airline_name}</p>
                        <p>Airline Code: {airlineSingular.iata_airline_code}</p>
                        <p>Airline Type: {airlineSingular.airline_type}</p>
                        <p>Air Freight: {airlineSingular.air_freight}</p>
                        <p>Fuel Surcharge: {airlineSingular.fuel_surcharge}</p>
                        <p>Security Surcharge: {airlineSingular.security_surcharge}</p>
                        <p>Screening: {airlineSingular.screening}</p>
                        <button className='btn'><span>Edit</span></button>
                        <button className='btn'><span>Delete</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        airlineSingular: state.airlineSingular
    }
}
export default connect(mapStateToProps)(AirlineRecord);