import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: {
                labels: this.props.airlineNames,
                datasets: [
                    {
                        label: 'Cost',
                        data: this.props.airlineCosts,
                        backgroundColor: "#D3D3D3",
                        hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    },
                    {
                        label: 'Profit',
                        data: this.props.profit,
                        backgroundColor: "#000000",
                        hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    }
                ]
            }
        }
    }

    componentWillReceiveProps(newProps) {
        // console.log(newProps)
        // const update = this.state.info.datasets[0].data
        this.setState({
            info: {
                labels: newProps.airlineNames,
                datasets: [
                    {
                        label: 'Cost',
                        data: newProps.airlineCosts,
                        backgroundColor: "#D3D3D3",
                        hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    },
                    {
                        label: 'Profit',
                        data: newProps.profit,
                        backgroundColor: "#000000",
                        hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    }
                ]

            }
        }, () => { })
    }



    render() {
        return (
            <div>
                <div className='chartdiv'>
                    <Bar
                        data={this.state.info}
                        width={950}
                        height={500}
                        options={{
                            scales: {
                                xAxes: [{
                                    stacked: false
                                }],
                                yAxes: [{
                                    stacked: false
                                }]
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}


export default Chart;