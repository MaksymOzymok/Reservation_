import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {Provider} from "react-redux";
import store from "./store/configureStore";
import App from './App';


ReactDOM.render(
    <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <App />
    </MuiPickersUtilsProvider>
    </Provider>,
  document.getElementById('root')
);

