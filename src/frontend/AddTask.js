import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import get_Ids from './action';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import TimePicker from 'react-time-picker';

const AddTask = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('10:00');
  const [input, setInput] = useState('');
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loading, ids } = state;

  useEffect(async () => {
    dispatch(get_Ids());
  }, []);

  const submitHandler = e => {
    const task = {
      assigned_user: ids[0],
      task_date: startDate,
      task_time: time,
      is_completed: 0,
      time_zone: 5,
      task_msg: input
    };
  };

  return (
    <div className="add-task-container">
      <div className="elements-in-card">
        <div className="task-description">
          <div>
            <label className="label" htmlFor="task-description">
              Task Description
            </label>
          </div>
          <div>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </div>
        </div>
        <div className="date-time">
          <div className="date">
            <div>
              <label className="label" htmlFor="task-description">
                Date
              </label>
            </div>
            <div>
              <i className="fas fa-calendar-alt" />
              <DatePicker
                className="date-picker"
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
          </div>
          <div className="time">
            <div>
              <label className="label" htmlFor="task-description">
                Time
              </label>
            </div>
            <div>
              <TimePicker
                clearIcon={null}
                format={'hh:mm:ss'}
                closeClock={false}
                className="time-picker"
                onChange={setTime}
                value={time}
              />
            </div>
          </div>
        </div>
        <select>{ids?.map(id => <option>{id}</option>)}</select>
        <button>Cancel</button>
        <button onClick={submitHandler}>Save</button>
      </div>
    </div>
  );
};
export default AddTask;
