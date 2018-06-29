import { FETCH_CHEESES_SUCCESS } from '../actions/cheese';

const initialState = {

}

const cheeseReducer = (state = initialState, action) => {
    if(action.type === 'FETCH_CHEESES_SUCCESS') {
        return {
            ...state,

        }
    }
    return state;
}
