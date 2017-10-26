import React, { Component } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './CustomerInput.css';

const STATES = require('./data');

class CustomerInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            country: 'AU',
            disabled: false,
            searchable: this.props.searchable,
            selectValue: 'Select Customer...',
            clearable: true,
            rtl: false,
            displayName: 'StatesField',
            propTypes: {
                label: PropTypes.string,
                searchable: PropTypes.bool,
            }
        }
        this.switchCountry = this.switchCountry.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.focusStateSelect = this.focusStateSelect.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    switchCountry(e) {
        var newCountry = e.target.value;
        this.setState({
            country: newCountry,
            selectValue: null,
        });
    }
    updateValue(newValue) {
        this.setState({
            selectValue: newValue,
        });
    }
    focusStateSelect() {
        this.refs.stateSelect.focus();
    }
    toggleCheckbox(e) {
        let newState = {};
        newState[e.target.name] = e.target.checked;
        this.setState(newState);
    }
    render() {
        var options = STATES[this.state.country];
        return (
            <div className="section">
                <h3 className="section-heading">{this.props.label} </h3>
                <Select
                    id="state-select"
                    ref="stateSelect"
                    autoFocus
                    options={options}
                    simpleValue
                    clearable={this.state.clearable}
                    name="selected-state"
                    disabled={this.state.disabled}
                    value={this.state.selectValue}
                    onChange={this.updateValue}
                    rtl={this.state.rtl}
                    searchable={this.state.searchable}
                />
                <div className="checkbox-list">
                    <label className="checkbox">
                        <input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry} />
                        <span className="checkbox-label">Cargo</span>
                    </label>
                    <label className="checkbox">
                        <input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry} />
                        <span className="checkbox-label">Passenger</span>
                    </label>
                </div>
            </div>
        );
    }
};

export default CustomerInput;