import React, { Component } from 'react';
import './AirlineUpdate.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateAirline } from './../../../ducks/users';

class AirlineUpdate extends Component {
    constructor(props) {
        super(props);
        const { airlineSingular } = this.props;

        this.state = {
            airFreight: airlineSingular.air_freight,
            fuelSurcharge: airlineSingular.fuel_surcharge,
            securitySurcharge: airlineSingular.security_surcharge,
            screening: airlineSingular.screening,
            iataAirlineCode: airlineSingular.iata_airline_code,
            airlineName: airlineSingular.airline_name,
            airlineType: airlineSingular.airline_type,
            airlineId: airlineSingular.airline_id
        }
        this.handleChange = this.handleChange.bind(this);
        this.finishWizard = this.finishWizard.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    finishWizard() {
        const { updateAirline } = this.props;
        this.props.airlineSingular.air_freight = parseFloat(this.state.airFreight);
        this.props.airlineSingular.fuel_surcharge = parseFloat(this.state.fuelSurcharge);
        this.props.airlineSingular.security_surcharge = parseFloat(this.state.securitySurcharge);
        this.props.airlineSingular.screening = parseFloat(this.state.screening);
        this.props.airlineSingular.iata_airline_code = this.state.iataAirlineCode;
        this.props.airlineSingular.airline_name = this.state.airlineName;
        this.props.airlineSingular.airline_type = this.state.airlineType;

        updateAirline(this.props.airlineSingular);
    }

    render() {
        const { airFreight, fuelSurcharge, securitySurcharge, screening, iataAirlineCode, airlineName, airlineType } = this.state;
        return (
            <div className='airlinerecord'>
                <div className='recheader'>
                    <img src={logo} alt="" />
                    <p>Airline Update View</p>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='selectbox'>
                    <Link to='/airlinemgmt'>
                        <button className='btn'><span>Airline Management</span></button>
                    </Link>
                    <Link to='/airlinerecord'>
                        <button className='btn'><span>Airline Record</span></button>
                    </Link>
                    <button className='btn' onClick={this.finishWizard}><span>Submit Airline Edit</span></button>
                    <Link to='/airlinemgmt'>
                        <button className='btn'><span>Cancel</span></button>
                    </Link>
                </div>
                <div className='recborder'>
                    <form>
                        <p className='formdisplay'>Airline: <input type="text" value={airlineName} onChange={(e) => this.handleChange('airlineName', e.target.value)} /></p>
                        <p className='formdisplay'>IATA Airline Code: <input type="number" value={iataAirlineCode} onChange={(e) => this.handleChange('iataAirlineCode', e.target.value)} /></p>
                        <p className='formdisplay'>Airline Type: <input type="text" value={airlineType} onChange={(e) => this.handleChange('airlineType', e.target.value)} /></p>
                        <p className='formdisplay'>Air Freight: <input type="number" value={airFreight} onChange={(e) => this.handleChange('airFreight', e.target.value)} /></p>
                        <p className='formdisplay'>Fuel Surcharge: <input type="number" value={fuelSurcharge} onChange={(e) => this.handleChange('fuelSurcharge', e.target.value)} /></p>
                        <p className='formdisplay'>Screening: <input type="number" value={screening} onChange={(e) => this.handleChange('screening', e.target.value)} /></p>
                        <p className='formdisplay'>Security Surcharge: <input type="number" value={securitySurcharge} onChange={(e) => this.handleChange('securitySurcharge', e.target.value)} /></p>
                    </form>
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
export default connect(mapStateToProps, { updateAirline })(AirlineUpdate);