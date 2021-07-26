import React, { useState, useEffect } from 'react';
import { get_Users, add_Task } from '../action';
import DateTime from '../inputs/DateTime';
import { Link, useHistory } from 'react-router-dom';
import Select from '../inputs/Select';
import Input from '../inputs/Input';
import Button from '../inputs/Button';
import { useDispatch, useSelector } from 'react-redux';
import 'date-fns';

const AddTask = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [input, setInput] = useState('');
  const [id, setId] = useState('');
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { users } = state;
  const history = useHistory();

  useEffect(async () => {
    dispatch(get_Users());
  }, []);

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
    // console.log(startDate.toString());
    // console.log(formatTime(startDate.toString().slice(17, 24)));
    const task = {
      assigned_user: 'user_41c1d48564a8435d815643996d9a388f',
      task_date: formatDate(startDate.toString()),
      task_time: formatTime(startDate.toString().slice(17, 24)),
      is_completed: 0,
      time_zone: 530,
      task_msg: input
    };
    // console.log(
      formatTime(startDate.toString().slice(17, 24)),
    //   formatDate(startDate.toString())
    // );

    dispatch(add_Task(task));
    alert('Task has been added successfully');
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
          <Input input={input} setInput={setInput} />
        </div>
        <div className="date-time">
          <DateTime startDate={startDate} setStartDate={setStartDate} />
        </div>
        <Select users={users} id={id} setId={setId} />

        <div className="button-box">
          <Link className="back" to="/">
            <Button value={'Back'} />
          </Link>
          <div
            onClick={() => {
              submitHandler();
            }}
          >
            <Button color="primary" value={'Save'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
