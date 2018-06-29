// import {
//     FETCH_CHEESES_REQUEST,
//     FETCH_CHEESES_SUCCESS,
//     FETCH_CHEESES_ERROR
// } from '../actions/cheeseAction';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
}

const cheeseReducer = (state = initialState, action) => {
    if(action.type === 'FETCH_CHEESES_REQUEST') {
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type === 'FETCH_CHEESES_SUCCESS') {
        return {
            ...state,
            loading: false,
            error: null,
            cheeses: action.cheeses
        }
    }
    else if(action.type === 'FETCH_CHEESES_ERROR') {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
}


export default cheeseReducer;
