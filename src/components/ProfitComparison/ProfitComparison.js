import React, { Component } from 'react';
import './ProfitComparison.css';
import logo from './../AirlineMgmt/logo.svg';
import { connect } from 'react-redux';
import { getAllAirlines } from './../../ducks/users';
import { Link } from 'react-router-dom';
import Chart from './Chart/Chart';
import CustomerInput from './Chart/CustomerInput/CustomerInput';

class ProfitComparison extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shipmentWeight: 0,
            profit: [],
            airlineNames: [],
            airlineCosts: [4000, 3000, 1500]
        }
    }

    componentDidMount() {
        this.props.getAllAirlines();
        console.log(this.props.airlines);
    }

    calculateAirlineCost = (val) => {
        var temp = []
        var temp1 = []
        this.props.airlines.map((e, i) => {
            temp.push([
                ...[parseFloat(e.air_freight)],
                ...[parseFloat(e.fuel_surcharge)],
                ...[parseFloat(e.screening)],
                ...[parseFloat(e.security_surcharge)]])
        })

        for (let i = 0; i < temp.length; i++) {
            var result = temp[i].reduce((a, b) => {
                return a + b
            })
            temp1.push(result)
        }
        temp1.sort((a, b) => {
            return a - b
        })
        var final = temp1.map(e => {
            return val * e;
        })
        console.log(final)
        this.setState({airlineCosts: final}, () => console.log('airline costs', this.state.airlineCosts));
    }

    calculateProfit(val) {

    }

    render() {
        return (
            <div className="profit">
                <div className='profitheader'>
                    <img src={logo} alt="" />
                    <h1>Profit Comparison</h1>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div>
                    <CustomerInput />
                    <input value={this.state.shipmentWeight} onChange={(e) => this.setState({ shipmentWeight: e.target.value })} />
                    <button onClick={() => {
                        this.calculateAirlineCost(this.state.shipmentWeight);
                        console.log('Two Functions Working');
                    }}>Calculate</button>
                </div>
                <Chart airlineCosts={this.state.airlineCosts}/>
                <Link to='/dashboard'>
                    <button className='btn'><span>Dashboard</span></button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        airlines: state.airlines,
        AU: state.AU
    }
};

const mapDispatchToProps = { getAllAirlines };

export default connect(mapStateToProps, mapDispatchToProps)(ProfitComparison);