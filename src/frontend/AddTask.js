import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DatePicker from 'react-datepicker';
import { get_Ids, add_Task } from './action';

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
    // dispatch(add_Task(task));
    axios({
      method: 'post',
      url:
        'https://stage.api.sloovi.com/task/lead_0a44acf4b9e94fbab7f865c42436d409?company_id=company_44a3f04d60ac451e86a22d26d15411a0',
      data: task,
      headers: {
        Authorization:
          'Bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjcwMzA3NjYsIm5iZiI6MTYyNzAzMDc2NiwianRpIjoiMDI1OTYzZjQtZjU3MC00NzMwLThjYTktMGQ2YTU5NzY4MjY0IiwiaWRlbnRpdHkiOnsibmFtZSI6Ik1haGkgTVNEIENTSyBDYXB0YWluIiwiZW1haWwiOiJnb29kQHRlc3QzLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzQxYzFkNDg1NjRhODQzNWQ4MTU2NDM5OTZkOWEzODhmIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9mZDE3ZDIwNjUwYzk5NTk0YWVmNmQxMjVhMjU5ODdlYT9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.t6jw3M3Gv4BgCTvRPQERcCqOItiN7t478YX4tjiEiv8',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => console.log({ data }));
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
