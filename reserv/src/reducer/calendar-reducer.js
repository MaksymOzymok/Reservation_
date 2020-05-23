import {
    CLEAR_ALL_FIELDS,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    SELECT_DATE,
    SELECT_TIME,
} from "../actions/calendar-actions";

const initialState = {
    selectedDate: [],
    userSelectedDate: null,
    userSelectTime: '',
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return state;
        case GET_DATA_SUCCESS:
            if (action.payload.data.length !== 0) {
                let newDate = action.payload.data[0];
                if (newDate.values.length === 0) {
                    return {...state, selectedDate: []}
                } else return {...state, selectedDate: action.payload.data};
            } else return {...state, selectedDate: []};
        case SELECT_DATE:
            return {...state, userSelectedDate: action.payload};
        case SELECT_TIME:
            return {...state, userSelectTime: action.payload};
        case CLEAR_ALL_FIELDS:
            return {...state, userSelectTime: '', selectedDate: []};
        default:
            return state;
    }
};
export default calendarReducer;