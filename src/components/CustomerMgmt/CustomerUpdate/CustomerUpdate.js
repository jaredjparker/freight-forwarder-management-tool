import React, { Component } from 'react';
import './CustomerUpdate.css';
import logo from './../../CustomerMgmt/logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCustomer } from './../../../ducks/users';

class CustomerUpdate extends Component {
    constructor(props) {
        super(props);
        const { customerSingular } = this.props;

        this.state = {
            airFreight: customerSingular.air_freight,
            fuelSurcharge: customerSingular.fuel_surcharge,
            securitySurcharge: customerSingular.security_surcharge,
            cellPhone: customerSingular.cell_phone,
            officePhone: customerSingular.office_phone,
            customerName: customerSingular.customer_name,
            industry: customerSingular.industry,
            personInCharge: customerSingular.person_in_charge,
            address: customerSingular.address,
            email: customerSingular.email,
            notes: customerSingular.notes,
            customerId: customerSingular.customer_id
        }
        this.handleChange = this.handleChange.bind(this);
        this.completeCustomerUpdate = this.completeCustomerUpdate.bind(this);
    }

    handleChange(prop, val) {
        this.setState({ [prop]: val });
    }

    completeCustomerUpdate() {
        const { updateCustomer } = this.props;
        this.props.customerSingular.air_freight = parseFloat(this.state.airFreight);
        this.props.customerSingular.fuel_surcharge = parseFloat(this.state.fuelSurcharge);
        this.props.customerSingular.security_surcharge = parseFloat(this.state.securitySurcharge);
        this.props.customerSingular.cell_phone = this.state.cellPhone;
        this.props.customerSingular.office_phone = this.state.officePhone;
        this.props.customerSingular.customer_name = this.state.customerName;
        this.props.customerSingular.industry = this.state.industry;
        this.props.customerSingular.person_in_charge = this.state.personInCharge;
        this.props.customerSingular.address = this.state.address;
        this.props.customerSingular.email = this.state.email;
        this.props.customerSingular.notes = this.state.notes;
        this.props.customerSingular.customer_id = this.state.customerId;

        updateCustomer(this.props.customerSingular);
    }

    render() {
        const { airFreight, fuelSurcharge, securitySurcharge, cellPhone, officePhone, customerName, industry, personInCharge, address, email, notes } = this.state;
        return (
            <div className='customerupdate'>
                <div className='custupheader'>
                    <img src={logo} alt="" />
                    <p>Customer Update View</p>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='buttonandinput'>
                    <div className='selectupdatebox'>
                        <Link to='/customermgmt'>
                            <button className='btn'><span>Customer Management</span></button>
                        </Link>
                        <Link to='/customerrecord'>
                            <button className='btn'><span>Customer Record</span></button>
                        </Link>
                        <button className='btn' onClick={this.completeCustomerUpdate}><span>Submit Customer Edit</span></button>
                        <Link to='/dashboard'>
                            <button className='btn'><span>Cancel</span></button>
                        </Link>
                    </div>
                    <div className='custupborder'>
                        <form>
                            <p className='custupdisplay'>Customer: <input type="text" value={customerName} onChange={(e) => this.handleChange('customerName', e.target.value)} /></p>
                            <p className='custupdisplay'>Person in Charge (PIC): <input type="text" value={personInCharge} onChange={(e) => this.handleChange('personInCharge', e.target.value)} /></p>
                            <p className='custupdisplay'>PIC Email: <input type="text" value={email} onChange={(e) => this.handleChange('email', e.target.value)} /></p>
                            <p className='custupdisplay'>PIC Office Phone: <input type="number" value={officePhone} onChange={(e) => this.handleChange('officePhone', e.target.value)} /></p>
                            <p className='custupdisplay'>PIC Cell Phone: <input type="number" value={cellPhone} onChange={(e) => this.handleChange('cellPhone', e.target.value)} /></p>
                            <p className='custupdisplay'>Company Address: <input type="text" value={address} onChange={(e) => this.handleChange('address', e.target.value)} /></p>
                            <p className='custupdisplay'>Industry: <input type="text" value={industry} onChange={(e) => this.handleChange('industry', e.target.value)} /></p>
                            <p className='custupdisplay'>Notes: <input type="text" value={notes} onChange={(e) => this.handleChange('notes', e.target.value)} /></p>
                            <p className='custupdisplay'>Air Freight: <input type="number" value={airFreight} onChange={(e) => this.handleChange('airFreight', e.target.value)} /></p>
                            <p className='custupdisplay'>Fuel Surcharge: <input type="number" value={fuelSurcharge} onChange={(e) => this.handleChange('fuelSurcharge', e.target.value)} /></p>
                            <p className='custupdisplay'>Security Surcharge: <input type="number" value={securitySurcharge} onChange={(e) => this.handleChange('securitySurcharge', e.target.value)} /></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        customerSingular: state.customerSingular
    }
}
export default connect(mapStateToProps, { updateCustomer })(CustomerUpdate);