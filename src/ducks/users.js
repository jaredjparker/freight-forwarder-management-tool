import axios from 'axios';

//INITIAL STATE
const initialState = {
    user: {},
    airlines: [{}]
}

//CONSTANTS THAT REPRESENT ACTIONS
const FULFILLED = '_FULFILLED';
const GET_USER_INFO = 'GET_USER_INFO';
const GET_ALL_AIRLINES = 'GET_ALL_AIRLINES';

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

export function getAllAirlines() {
    const allAirlines = axios.get('/api/airlines')
    .then (res => {
        return res.data
    })
    return {
        type: GET_ALL_AIRLINES,
        payload: allAirlines
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + FULFILLED:
            return Object.assign({}, state, {user: action.payload})

            case GET_ALL_AIRLINES + FULFILLED:
                return Object.assign( {}, state, {airlines: action.payload});

        default: return state;

    }
    
}