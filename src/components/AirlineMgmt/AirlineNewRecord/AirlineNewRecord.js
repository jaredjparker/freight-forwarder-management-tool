import React, { Component } from 'react';
import './AirlineNewRecord.css';
// import {connect} from 'react-redux'

class AirlineNewRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordInfo: {}
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>Airline New Record View</p>
                    <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
                </div>
                <form>
                    Airline: <input type="text" name="airline_name" />
                    IATA Airline Code: <input type="text" name="iata_airline_code" />
                    Airline Type: <input type="text" name="airline_type" />
                    Air Freight: <input type="number" name="air_freight" />
                    Fuel Surcharge: <input type="number" name="fuel_surcharge" />
                    Security Surcharge: <input type="number" name="security_surcharge" />
                    Screening: <input type="number" name="screening" />
                </form>
            </div>
        )
    }
}

export default AirlineNewRecord;