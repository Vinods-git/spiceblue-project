import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { get_Users, add_Task } from './action';
import MaterialUIPickers from './MaterialUIPickers';
import Select from './Select';
import Input from './Input';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

const AddTask = props => {
  const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [time, setTime] = useState('10:00:00');
  const [input, setInput] = useState('');
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loading, users } = state;

  useEffect(async () => {
    dispatch(get_Users());
  }, []);

  const handleChange = event => {
    setId(event.target.value);
  };

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  function formatTime(hms) {
    // var hms = '02:04:33';   // your input string
    var a = hms.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
  }

  const submitHandler = e => {
    console.log(formatDate(startDate.toString()));
    console.log(time);

    const task = {
      assigned_user: 'user_41c1d48564a8435d815643996d9a388f',
      task_date: formatDate(startDate.toString()),
      task_time: time,
      is_completed: 0,
      time_zone: 5,
      task_msg: input
    };
    console.log(task);

    dispatch(add_Task(task));
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className="task-container">
      <div className="elements-in-card">
        <div className="task-description">
          <Input />
        </div>
        <div className="date-time">
          <MaterialUIPickers />
        </div>
        <Select users={users} />
        <div className="button-box">
          <Button  value={'Cancel'} />
          <Button color='primary' value={'Save'} />
        </div>
      </div>
    </div>
  );
};
export default AddTask;
