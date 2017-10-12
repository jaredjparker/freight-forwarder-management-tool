import React, {Component} from 'react';
import './AirlineRecord.css';
// import {connect} from 'react-redux'

class AirlineRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordInfo: {}
        }
    }

    render() {
        return (
            <div>Airline Record View</div>
        )
    }
}

export default AirlineRecord;