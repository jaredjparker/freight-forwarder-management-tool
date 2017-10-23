import React, { Component } from 'react';
import './ProfitComparison.css';
import logo from './../AirlineMgmt/logo.svg';
import { Bar } from 'react-chartjs-2';

class ProfitComparison extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: '#ffffff',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        }
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
                    <h2>Bar Example (custom size)</h2>
                    <Bar
                        data={this.state.data}
                        width={200}
                        height={100}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </div>
        )
    }
}
export default ProfitComparison;