import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: {
                labels: ['Delta', 'Nippon', 'kl;jki', 'rob', 'jared'],
                datasets: [
                    {
                        label: 'Cost',
                        data: this.props.airlineCosts,
                        backgroundColor: "#61DAFB",
                        hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    },
                    {
                        label: 'Profit',
                        data: this.props.profit,
                        backgroundColor: "#ffffff",
                        hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    }
                ]
            }
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps)
        // const update = this.state.info.datasets[0].data
        this.setState({
            info: {
                labels: [...this.state.info.labels],
                datasets: [
                    {
                        label: 'Cost',
                        data: newProps.airlineCosts,
                        backgroundColor: "#61DAFB",
                        hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    },
                    {
                        label: 'Profit',
                        data: newProps.profit,
                        backgroundColor: "#ffffff",
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
                <div>
                    <Bar
                        data={this.state.info}
                        width={600}
                        height={350}
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