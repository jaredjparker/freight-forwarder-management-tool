import React, { Component } from 'react';
import './AirlineRecord.css';
import {connect} from 'react-redux'

class AirlineRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recordInfo: {}
        }
    }

    render() {
        console.log('AirlineRecord prop', this.props.airlineSingular);
        const airlineSingular = this.props.airlineSingular;
        const oneAirline = airlineSingular.map((airline, i) => {
          return (
              <div className='airrec' key={i} onClick={() => console.log('Div onClick', airlineSingular[i].airline_id)}>
                <p >{airline.airline_id}</p>
                <p>{airline.airline_name}</p>
                <p>{airline.iata_airline_code}</p>
                <p>{airline.airline_type}</p>
              </div>
          )
        });

        return (
            <div>
                <div>
                    <p>Airline Record View</p>
                    <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
                </div>
                {oneAirline}
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

function mapStateToProps(state) {
    return {
        airlineSingular: state.airlineSingular
    }
}
export default connect(mapStateToProps)(AirlineRecord);