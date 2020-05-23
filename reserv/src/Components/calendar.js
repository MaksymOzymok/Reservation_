import React, {useState } from "react";
import { DatePicker } from "@material-ui/pickers";


function BasicDatePicker({getData,onSelectDate}) {
    const [selectedDate, handleDateChange] = useState( '5/1/2020');
    return (
            <DatePicker
                label="Choose date"
                value={selectedDate}
                format="dd/MM/yyyy"
                onChange={(date)=>{
                    handleDateChange(date);
                    onSelectDate(date.getDate()+'/'+(+date.getMonth()+1)+'/'+date.getFullYear());
                    getData(date.getDate()+'/'+(+date.getMonth()+1)+'/'+date.getFullYear());
                }}
                animateYearScrolling
            />
    );
}

export default BasicDatePicker;