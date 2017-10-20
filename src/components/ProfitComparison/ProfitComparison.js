import React, { Component } from 'react';
import './ProfitComparison.css';
import * as d3 from 'd3';
import logo from './../AirlineMgmt/logo.svg';

class ProfitComparison extends Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        var cost = [30, 86, 168, 281, 303, 365];

        d3.select(".chart")
            .selectAll("div")
            .data(cost)
            .enter()
            .append("div")
            .style("width", function (d) { return d + "px"; })
            .style('height', '20px')
            .text(function (d) { return d; });
    }
    render() {
        return (
            <div className="profit">
                <div className='profitheader'>
                    <img src={logo} alt="" />
                    <h1>Dashboard</h1>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='chart'></div>
            </div>
        )
    }
}
export default ProfitComparison;