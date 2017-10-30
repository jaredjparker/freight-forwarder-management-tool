import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './../../AirlineMgmt/logo.svg';
import { Link } from 'react-router-dom';
import { deleteAirline } from './../../../ducks/users';

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
            <div className='airrecord'>
                <div className='airrecheader'>
                    <img src={logo} alt="" />
                    <h1 className='airrectitle'>Airline Record View</h1>
                    <a href='http://localhost:3005/auth/logout'><button className='bton'><span>Log out</span></button></a>
                </div>
                <div>
                    <div className='airrecleftpanel'>
                        <Link to='/airlinemgmt'><button className='bton'><span>Airline Management</span></button></Link>
                        <Link to='/airlinemgmt'><button className='bton'><span>Cancel</span></button></Link>
                    </div>
                    <div className='airrecordborder'>
                        <p className='airreclineitem'>Airline Name: {airlineSingular.airline_name}</p>
                        <p className='airreclineitem'>Airline Code: {airlineSingular.iata_airline_code}</p>
                        <p className='airreclineitem'>Airline Type: {airlineSingular.airline_type}</p>
                        <p className='airreclineitem'>Air Freight: {airlineSingular.air_freight}</p>
                        <p className='airreclineitem'>Fuel SC: {airlineSingular.fuel_surcharge}</p>
                        <p className='airreclineitem'>Security SC: {airlineSingular.security_surcharge}</p>
                        <p className='airreclineitem'>Screening: {airlineSingular.screening}</p>
                        <div className='insidebut'>
                            <Link to='/airlineupdate'>
                                <button className='bton'><span>Edit Airline</span></button>
                            </Link>
                            <button className='bton' onClick={() => this.props.deleteAirline(airlineSingular.airline_id)}><span>Delete Airline</span></button>
                        </div>
                    </div>
                </div>
                <div className='airrecfoot'></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        airlineSingular: state.airlineSingular
    }
}
export default connect(mapStateToProps, { deleteAirline })(AirlineRecord);