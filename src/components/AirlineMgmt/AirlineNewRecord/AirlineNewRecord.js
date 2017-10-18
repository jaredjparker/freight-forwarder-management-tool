import React, { Component } from 'react';
import './AirlineNewRecord.css';
import { connect } from 'react-redux'
import { updateWizard, createAirline, resetWizard } from './../../../ducks/users';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class AirlineNewRecord extends Component {
    constructor(props) {
        super(props);
        const { wizard } = this.props;

        this.state = {
            airFreight: wizard.air_freight || 0,
            fuelSurcharge: wizard.fuel_surcharge || 0,
            securitySurcharge: wizard.security_surcharge || 0,
            screening: wizard.screening || 0,
            iataAirlineCode: wizard.iata_airline_code || 0,
            airlineName: wizard.airline_name || '',
            airlineType: wizard.airline_type || ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.finishWizard = this.finishWizard.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    finishWizard() {
        const { createAirline } = this.props;
        this.props.wizard.air_freight = parseFloat(this.state.airFreight);
        this.props.wizard.fuel_surcharge = parseFloat(this.state.fuelSurcharge);
        this.props.wizard.security_surcharge = parseFloat(this.state.securitySurcharge);
        this.props.wizard.screening = parseFloat(this.state.screening);
        this.props.wizard.iata_airline_code = this.state.iataAirlineCode;
        this.props.wizard.airline_name = this.state.airlineName;
        this.props.wizard.airline_type = this.state.airlineType;

        resetWizard();
        createAirline(this.props.wizard);
    }

    render() {
        const { airFreight, fuelSurcharge, securitySurcharge, screening, iataAirlineCode, airlineName, airlineType } = this.state;
        return (
            <div className='airlinerecord'>
                <div className='recheader'>
                    <img src={logo} alt="" />
                    <p>Airline New Record View</p>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='barbox'>
                    <div className='selectbox'>
                        <Link to='/airlinemgmt'>
                            <button className='btn'><span>Airline Management</span></button>
                        </Link>
                        <button className='btn' onClick={this.finishWizard}><span>Add Airline</span></button>
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
            </div>
        )
    }
}

export default connect(state => ({ wizard: state.wizard }), { updateWizard, createAirline, resetWizard })(AirlineNewRecord);