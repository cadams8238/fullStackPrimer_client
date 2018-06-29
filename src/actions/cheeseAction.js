import { API_BASE_URL } from '../.config';
import { normalizeResponseErrors } from './utils';


const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
const fetchCheesesRequest = () => {
    type: FETCH_CHEESES_REQUEST
}

const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = cheeses => {
    return {
        type: FETCH_CHEESES_SUCCESS,
        cheeses
    }
}

const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
const fetchCheesesError = error => {
    type: FETCH_CHEESES_ERROR,
    error
}

export const fetchCheeses = () => dispatch => {
    fetch(`${API_BASE_URL}/api/cheeses`)
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(jsonData => dispatch(fetchCheesesSuccess(jsonData.cheeses)))
        .catch(error => dispatch(fetchCheesesError(error)))
}
