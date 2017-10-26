import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './CustomerInput.css';
import {connect} from 'react-redux';
import {setSalePrice} from './../../../../ducks/users';

// const STATES = require('./data');

class CustomerInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            country: 'AU',
            disabled: false,
            searchable: this.props.searchable,
            selectValue: 'Customer...',
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
        // var options = STATES[this.state.country];
        return (
            <div className="section">
                <h3 className="section-heading">{this.props.label}</h3>
                <Select
                    id="state-select"
                    ref="stateSelect"
                    autoFocus
                    options={this.props.AU}
                    simpleValue
                    clearable={this.state.clearable}
                    name="selected-state"
                    disabled={this.state.disabled}
                    value={this.state.selectValue}
                    onChange={((e) => {
                        this.updateValue(this.props.AU[e]);
                        this.props.setSalePrice(this.props.AU[e].rev);
                    })}
                    rtl={this.state.rtl}
                    searchable={this.state.searchable}
                />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        AU: state.AU,
        custSalePrice: state.custSalePrice
    }
};

export default connect(mapStateToProps, {setSalePrice})(CustomerInput);