import React, { Component } from 'react';
import './CustomerMgmt.css';
import { getAllCustomers, getOneCustomer } from './../../ducks/users';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class CustomerMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerInfo: {}
    }
  }

  componentDidMount() {
    this.props.getAllCustomers();
  }

  render() {
    const customers = this.props.customers;
    const customerList = customers.map((customer, i) => {
      return (
        <Link to='/customerrecord' key={i}>
          <div className='airrec' onClick={() => this.props.getOneCustomer(customers[i].customer_id)}>
            <p>{customer.customer_name}</p>
            <p>{customer.person_in_charge}</p>
            <p>{customer.email}</p>
          </div>
        </Link>
      )
    });

    return (
      <div className="airlinemgmt">
        <div className='airheader'>
          <img src={logo} alt="" />
          <h2>Customer Management</h2>
          <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
        </div>
        <div className='sbox'>
          <Link to='/dashboard'>
            <button className='btn'><span>Dashboard</span></button>
          </Link>

          <button className='btn'><span>New Customer</span></button>

        </div>
        {customerList}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customers: state.customers
  }
}

const mapDispatchToProps = { getAllCustomers, getOneCustomer }

export default connect(mapStateToProps, mapDispatchToProps)(CustomerMgmt);
