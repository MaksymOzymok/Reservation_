import React from 'react';
import {connect} from "react-redux";
import BasicDatePicker from "./Components/calendar";
import {
    clearAllFields,
    getData,
    makeReservation,
    onSelectDate,
    onSelectTime,
    postData
} from "./actions/calendar-actions";
import TimeSlot from "./Components/time-slot";
import Button from '@material-ui/core/Button';
import Warning from "./Components/warning";

function App({getData, onSelectDate, onSelectTime, makeReservation, postData, clearAllFields, ...props}) {
    const res = {};
    if (props.values.length !== 0) {
        res['id'] = props.values[0].id;
        res['date'] = props.values[0].date;
        res['values'] = props.values[0].values.filter(value => value !== props.userSelectTime);
    }
    return (

        <div className="App">
            <BasicDatePicker getData={getData} onSelectDate={onSelectDate}/>
            <TimeSlot data={props.values} onSelectTime={onSelectTime}/>
            <Button variant="contained"
                    color="primary"
                    style={{
                        marginLeft: '20px',
                        marginTop: '10px'
                    }}
                    onClick={() => {
                        if (props.userSelectTime !== '') {
                            makeReservation(res.id, res.date, res.values);
                            setTimeout(() => getData(res.date), 1000);
                            postData(res.date, props.userSelectTime);
                            clearAllFields();
                        } else alert('Please choose another date and time');
                    }}
            >
                reserve
            </Button>
            {props.values.length === 0 ? <Warning/> : null}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (id) => dispatch(getData(id)),
        onSelectDate: (date) => dispatch(onSelectDate(date)),
        onSelectTime: (time) => dispatch(onSelectTime(time)),
        makeReservation: (id, date, values) => dispatch(makeReservation(id, date, values)),
        postData: (date, value) => dispatch(postData(date, value)),
        clearAllFields: () => dispatch(clearAllFields())
    }
};
const mapStateToProps = (store) => {
    return {
        values: store.selectedDate,
        userSelectTime: store.userSelectTime
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
