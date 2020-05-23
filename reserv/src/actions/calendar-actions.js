import axios from "axios"

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const SELECT_DATE = 'SELECT_DATE';
export const SELECT_TIME = 'SELECT_TIME';
export const MAKE_RESERVATION_REQUEST = 'MAKE_RESERVATION_REQUEST';
export const MAKE_RESERVATION_SUCCESS = 'MAKE_RESERVATION_SUCCESS';
export const CLEAR_ALL_FIELDS = 'CLEAR_ALL_FIELDS';
export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';


const getDataRequest = () => {
    return {
        type: GET_DATA_REQUEST
    }
};
const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
};
const postDataRequest = () => {
    return {
        type: POST_DATA_REQUEST
    }
};
const postDataSuccess = () => {
    return {
        type: POST_DATA_SUCCESS
    }
};

export const onSelectDate = (date) => {
    return {
        type: SELECT_DATE,
        payload: date
    }
};
export const onSelectTime = (time) => {
    return {
        type: SELECT_TIME,
        payload: time
    }
};

export const getData = (id) => {
    return dispatch => {
        dispatch(getDataRequest());
        axios({
            method: 'get',
            url: `http://localhost:3000/free?date=${id}`
        }).then((result) => dispatch(getDataSuccess(result)))
    }
};

const makeReservationRequest = () => {
    return {
        type: MAKE_RESERVATION_REQUEST
    }
};
const makeReservationSuccess = () => {
    return {
        type: MAKE_RESERVATION_SUCCESS
    }
};
export const makeReservation = (id, date, values) => {
    return dispatch => {
        dispatch(makeReservationRequest());
        axios({
            url: `http://localhost:3000/free/${id}`,
            method: 'PUT',
            data: {
                date: date,
                values: values
            }
        }).then(() =>
            dispatch(makeReservationSuccess()))
    }
};
export const postData = (date, value) => {
    return dispatch => {
        dispatch(postDataRequest());
        axios({
            url: `http://localhost:3000/reserved`,
            method: 'POST',
            data: {
                date: date,
                time: value
            }
        }).then(() =>
            dispatch(postDataSuccess()))
    }
};
export const clearAllFields = () => {
    return {
        type: CLEAR_ALL_FIELDS
    }
};