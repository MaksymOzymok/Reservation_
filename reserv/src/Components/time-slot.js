import React from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginLeft: 10,
        minWidth: 120,
    }
}));
export default function TimeSlot(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        props.onSelectTime(event.target.value);
    };

    return (
        props.data.length !== 0 && <FormControl className={classes.formControl}>

            <InputLabel id="demo-simple-select-label">Choose time</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}>
                {props.data.length !== 0 && menuItems(props.data[0].values)}
            </Select>
        </FormControl>)
};

const menuItems = (data) => {
    return data.map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)
};
