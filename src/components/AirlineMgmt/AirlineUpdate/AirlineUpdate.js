import React, { Component } from 'react';
import logo from './../../AirlineMgmt/logo.svg';
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
            <div className='airupdate'>
                <div className='airupheader'>
                    <img src={logo} alt="" />
                    <h1 className='airuptitle'>Airline Update View</h1>
                    <a href='../Login'><button className='bton'><span>Log out</span></button></a>
                </div>
                <div className='airupleftpanel'>
                    <Link to='/airlinemgmt'>
                        <button className='bton'><span>Airline Management</span></button>
                    </Link>
                    <Link to='/airlinerecord'>
                        <button className='bton'><span>Airline Record</span></button>
                    </Link>
                    <Link to='/airlinemgmt'>
                        <button className='bton'><span>Cancel</span></button>
                    </Link>
                </div>
                <div className='airupborder'>
                    <form>
                        <div className='airuplineitem'><p className='formdisplay'>Airline Name: <input className='airupin' type="text" value={airlineName} onChange={(e) => this.handleChange('airlineName', e.target.value)} /></p></div>
                        <div className='airuplineitem'><p className='formdisplay'>Airline Code: <input className='airupin' type="number" value={iataAirlineCode} onChange={(e) => this.handleChange('iataAirlineCode', e.target.value)} /></p></div>
                        <div className='airuplineitem'><p className='formdisplay'>Airline Type: <input className='airupin' type="text" value={airlineType} onChange={(e) => this.handleChange('airlineType', e.target.value)} /></p></div>
                        <div className='airuplineitem'><p className='formdisplay'>Air Freight: <input className='airupin' type="number" value={airFreight} onChange={(e) => this.handleChange('airFreight', e.target.value)} /></p></div>
                        <div className='airuplineitem'><p className='formdisplay'>Fuel Charge: <input className='airupin' type="number" value={fuelSurcharge} onChange={(e) => this.handleChange('fuelSurcharge', e.target.value)} /></p></div>
                        <div className='airuplineitem'><p className='formdisplay'>Screening: <input className='airupin' type="number" value={screening} onChange={(e) => this.handleChange('screening', e.target.value)} /></p></div>
                        <div className='airuplineitem'><p className='formdisplay'>Security SC: <input className='airupin' type="number" value={securitySurcharge} onChange={(e) => this.handleChange('securitySurcharge', e.target.value)} /></p></div>
                    </form>
                    <Link to='/profitcomparison'>
                        <button className='bton' onClick={this.finishWizard}><span>Submit Airline Edit</span></button>
                    </Link>
                </div>
                <div className='airupfoot'></div>
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