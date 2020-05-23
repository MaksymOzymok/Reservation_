import calendarReducer from "../reducer/calendar-reducer";
import {createStore,applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const store = createStore(calendarReducer,applyMiddleware(thunk));

export default store;