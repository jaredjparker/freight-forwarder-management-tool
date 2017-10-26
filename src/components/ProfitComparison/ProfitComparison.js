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
            airlineCosts: []
        }
    }

    componentDidMount() {
        this.props.getAllAirlines();
    }

    calculateAirlineCost = (val) => {
        const { shipmentWeight } = this.state;
        const { custSalePrice, airlines } = this.props;
        const onlyLabels = [];
        const labelValCombo = [];
        const finalCost = [];
        const finalLabels = [];
        const fiveArray = [];
        var temp = [];
        var temp1 = [];
        airlines.map((e, i) => {
            return temp.push([
                ...[parseFloat(e.air_freight)],
                ...[parseFloat(e.fuel_surcharge)],
                ...[parseFloat(e.screening)],
                ...[parseFloat(e.security_surcharge)]])
        })

        airlines.map((e, i) => onlyLabels.push(e.airline_name));
        console.log('Airline Labels', onlyLabels)

        for (let i = 0; i < temp.length; i++) {
            var result = temp[i].reduce((a, b) => {
                return a + b
            })
            temp1.push(result)
        }

        var final = temp1.map(e => {
            return val * e;
        })

        final.map((e, i) => {
            let arr = [];
            arr.push(e);
            arr.push(onlyLabels[i]);
            return labelValCombo.push(arr);
        })

        labelValCombo.sort((a, b) => a[0] - b[0]);
        console.log(labelValCombo);

        for (let i = 0; i < 5; i++) {
            fiveArray.push(labelValCombo[i]);
        }
        console.log(fiveArray);

        const finalProfit = fiveArray.map((e, i) => {
            return (custSalePrice * shipmentWeight - e[0]);
        })
        fiveArray.map((e, i) => finalCost.push(e[0]));
        fiveArray.map((e, i) => finalLabels.push(e[1]));
        this.setState({ profit: finalProfit });
        this.setState({ airlineCosts: finalCost });
        this.setState({ airlineNames: finalLabels });
    }

    render() {
        // console.log('Here is this.state.profit', this.state.profit);
        // console.log('Here is this.state.airlineCosts', this.state.airlineCosts);
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
                    <button onClick={() => this.calculateAirlineCost(this.state.shipmentWeight)}>Calculate</button>
                </div>
                <Chart airlineCosts={this.state.airlineCosts} profit={this.state.profit} airlineNames={this.state.airlineNames} />
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
        AU: state.AU,
        custSalePrice: state.custSalePrice
    }
};

const mapDispatchToProps = { getAllAirlines };

export default connect(mapStateToProps, mapDispatchToProps)(ProfitComparison);