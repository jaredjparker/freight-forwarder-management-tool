import React, { Component } from 'react';
import './CustomerRecord.css';
import { connect } from 'react-redux'
import logo from './../logo.svg';
import { Link } from 'react-router-dom';

class CustomerRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordInfo: {}
        }
    }

    render() {
        const customerSingular = this.props.customerSingular;

        return (
            <div className='customerrecord'>
                <div className='recheader'>
                    <img src={logo} alt="" />
                    <p>Customer Record View</p>
                    <a href='../Login'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='barbox'>
                    <div className='tocolumn'>
                        <Link to='/dashboard'><button className='btn'><span>Dashboard</span></button></Link>
                        <Link to='/customermgmt'><button className='btn'><span>Customer Management</span></button></Link>
                    </div>
                    <div className='recborder'>
                        <p>Customer Name: {customerSingular.customer_name}</p>
                        <p>Person in Charge (PIC): {customerSingular.person_in_charge}</p>
                        <p>PIC Email: {customerSingular.email}</p>
                        <p>PIC Office Phone: {customerSingular.office_phone}</p>
                        <p>PIC Cell Phone: {customerSingular.cell_phone}</p>
                        <p>Company Address: {customerSingular.address}</p>
                        <p>Notes of Importance: {customerSingular.notes}</p>
                        <p>Air Freight: {customerSingular.air_freight}</p>
                        <p>Fuel Surcharge: {customerSingular.fuel_surcharge}</p>
                        <p>Security Surcharge: {customerSingular.security_surcharge}</p>
                        <Link to='/customerupdate'>
                            <button className='btn'><span>Edit Customer</span></button>
                        </Link>
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
export default connect(mapStateToProps)(CustomerRecord);