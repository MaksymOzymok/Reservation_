import {Alert} from '@material-ui/lab';
import React from "react";

export default function Warning() {
    return (
        <Alert severity="warning" style={{width: '280px'}}>

            There aren't available time-slots<strong> Please, choose another date</strong>
        </Alert>
    )
};