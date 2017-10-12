import axios from 'axios';

//INITIAL STATE
const initialState = {
    user: {},
    flights: {}
}

//CONSTANTS THAT REPRESENT ACTIONS
const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALL_FLIGHTS = 'GET_ALL_FLIGHTS';

//ACTION CREATORS
export function getUserInfo() {
    const userData = axios.get('/auth/me')
    .then (res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getAllFlights() {
    const allFlights = axios.get('/api/flights')
    .then (res => {
        return res.data
    })
    return {
        type: GET_ALL_FLIGHTS,
        payload: allFlights
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})

            case GET_ALL_FLIGHTS:
                return Object.assign( {}, state, {flights: action.payload});

        default: return state;

    }
    
}