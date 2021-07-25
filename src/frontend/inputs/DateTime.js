import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { alpha } from '@material-ui/core/styles'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

export default function DateTime(props) {
  // The first commit of Material-UI
  const { startDate, setStartDate, time, setTime } = props;

  const handleDateChange = date => {
    setStartDate(date);
  };
  const handleTimeChange = time => {
    setTime(time);
  };
  return (
    <MuiPickersUtilsProvider  utils={DateFnsUtils}>
      <Grid container justifyContent="space-between">
        <KeyboardDatePicker
          className="date"
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label="Date"
          value={startDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />

        <KeyboardTimePicker
          className="time"
          margin="normal"
          id="time-picker"
          label="Time"
          format="hh:mm:ss a"
          variant="inline"
          value={startDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
