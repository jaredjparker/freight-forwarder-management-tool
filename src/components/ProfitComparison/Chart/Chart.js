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
                        data: [10000, 4000, 1300, 1400, 1060, 2030, 2070, 4000, 4100, 4020, 4030, 4050],
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
        const update = this.state.info.datasets[0].data
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
                        data: [10000, 4000, 1300, 1400, 1060, 2030, 2070, 4000, 4100, 4020, 4030, 4050],
                        backgroundColor: "#ffffff",
                        hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
                        hoverBorderWidth: 2,
                        hoverBorderColor: 'lightgrey'
                    }
                ]

            }
        }, () => { console.log(update) })
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
                                    stacked: true
                                }],
                                yAxes: [{
                                    stacked: true
                                }]
                            }
                        }}
                    />
                </div>
                <button onClick={()=> console.log(this.state)}>Console</button>
            </div>
        )
    }
}


export default Chart;