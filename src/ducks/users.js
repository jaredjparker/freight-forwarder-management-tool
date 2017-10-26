import axios from 'axios';

//INITIAL STATE
const initialState = {
    user: {},
    airlines: [{}],
    customers: [{}],
    airlineSingular: {},
    customerSingular: {},
    newAirline: {},
    custSalePrice: '1561564',
    wizard: {
        air_freight: 0,
        fuel_surcharge: 0,
        security_surcharge: 0,
        screening: 0,
        iata_airline_code: 0,
        airline_name: '',
        airline_type: ''
    },
    AU: [
        { value: "0", label: "Kuhlman Inc", className: 'State-ACT', rev: '16' },
        { value: '1', label: 'Stanton-Rosenbaum', className: 'State-NSW', rev: '7' },
        { value: '2', label: 'Lockman-Simonis', className: 'State-Vic', rev: '2.5' },
        { value: '3', label: 'Heller Ltd', className: 'State-Qld', rev: '8' },
        { value: '4', label: 'Beier-Spencer', className: 'State-WA', rev: '12' },
        { value: '5', label: 'Skiles-Terry', className: 'State-SA', rev: '14' },
        { value: '6', label: 'Giant Medical Systems', className: 'State-Tas', rev: '1.90' },
        { value: '7', label: 'Sipes-Keebler', className: 'State-NT', rev: '9' }
    ]
}

//CONSTANTS THAT REPRESENT ACTIONS
const FULFILLED = '_FULFILLED';
const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALL_AIRLINES = 'GET_ALL_AIRLINES';
const GET_ONE_AIRLINE = 'GET_ONE_AIRLINE';
const UPDATE_WIZARD = "UPDATE_WIZARD";
const RESET_WIZARD = "RESET_WIZARD";
const CREATE_AIRLINE = "CREATE_AIRLINE";
const UPDATE_AIRLINE = 'UPDATE_AIRLINE';
const DELETE_AIRLINE = 'DELETE_AIRLINE';
const GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS';
const GET_ONE_CUSTOMER = 'GET_ONE_CUSTOMER';
const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
const CUST_SALE_PRICE = 'CUST_SALE_PRICE';

//ACTION CREATORS
export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getAllAirlines() {
    const allAirlines = axios.get('/api/airlines')
        .then(res => {
            return res.data
        })
    return {
        type: GET_ALL_AIRLINES,
        payload: allAirlines
    }
}

export function getAllCustomers() {
    const allCustomers = axios.get('/api/customers')
        .then(res => {
            return res.data
        })
    return {
        type: GET_ALL_CUSTOMERS,
        payload: allCustomers
    }
}

export function updateWizard(obj) {
    return {
        type: UPDATE_WIZARD,
        payload: obj
    };
}

export function setSalePrice(val) {
    return {
        type: CUST_SALE_PRICE,
        payload: val
    }
}

export function resetWizard() {
    return {
        type: RESET_WIZARD,
        payload: null
    };
}

export function createAirline(obj) {
    console.log("Create Airline Fired")
    const promise = axios.post('/api/airlines', obj).then(response => {
        console.log(response);
        return response.data;
    });

    return {
        type: CREATE_AIRLINE,
        payload: promise
    };
}

export function updateAirline(obj) {
    console.log('Update Airline Fired')
    const updatedAirline = axios.put('/api/airlines', obj).then(response => {
        return response.data;
    });

    return {
        type: UPDATE_AIRLINE,
        payload: updatedAirline
    }
}

export function updateCustomer(obj) {
    console.log('Update Customer Fired')
    const updatedCustomer = axios.put('/api/customers', obj).then(response => {
        return response.data;
    });

    return {
        type: UPDATE_CUSTOMER,
        payload: updatedCustomer
    }
}

export function getOneAirline(airlineId) {
    console.log('getOne fired');
    const oneAirline = axios.get('/api/airlines/' + airlineId)
        .then(res => {
            return res.data
        })
    return {
        type: GET_ONE_AIRLINE,
        payload: oneAirline
    }
}

export function getOneCustomer(customerId) {
    console.log('getOneCustomer fired');
    const oneCustomer = axios.get('/api/customers/' + customerId)
        .then(res => {
            return res.data
        })
    return {
        type: GET_ONE_CUSTOMER,
        payload: oneCustomer
    }
}

export function deleteAirline(airlineId) {
    console.log('Delete Airline fired');
    const deleteAirline = axios.delete('/api/airlines/' + airlineId)
        .then(res => {
            return res.data
        })
    return {
        type: DELETE_AIRLINE,
        payload: deleteAirline
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + FULFILLED:
            return Object.assign({}, state, { user: action.payload })

        case GET_ALL_CUSTOMERS + FULFILLED:
            return Object.assign({}, state, { customers: action.payload })
        case GET_ONE_CUSTOMER + FULFILLED:
            return Object.assign({}, state, { customerSingular: action.payload })

        case GET_ALL_AIRLINES + FULFILLED:
            return Object.assign({}, state, { airlines: action.payload });

        case GET_ONE_AIRLINE + FULFILLED:
            return Object.assign({}, state, { airlineSingular: action.payload });
        case DELETE_AIRLINE + FULFILLED:
            return Object.assign({}, state, { airlineSingular: action.payload });

        case UPDATE_WIZARD: {
            let newState = Object.assign({}, state);
            for (var i in action.payload) {
                newState.wizard[i] = action.payload[i];
            }
            return newState;
        }

        case CUST_SALE_PRICE:
            return Object.assign({}, state, { custSalePrice: action.payload });

        case RESET_WIZARD: {
            let newState = Object.assign({}, state);
            for (var j in newState.wizard) {
                newState.wizard[j] = null;
            }
            return newState;
        }

        case CREATE_AIRLINE + FULFILLED:
            return Object.assign({}, state, { newAirline: action.payload });

        case UPDATE_AIRLINE + FULFILLED:
            return Object.assign({}, state, { airlineSingular: action.payload });

        case UPDATE_CUSTOMER + FULFILLED:
            return Object.assign({}, state, { customerSingular: action.payload });

        default: return state;

    }

}