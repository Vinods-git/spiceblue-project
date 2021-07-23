import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import TimePicker from 'react-time-picker';

const AddTask = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  const state = useSelector(state => state);

  return (
    <div className="add-task-container">
      <div className="elements-in-card">
        <div className="task-description">
          {console.log(state.Value)}
          <div>
            <label className="label" htmlFor="task-description">
              Task Description
            </label>
          </div>
          <div>
            <input type="text" />
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
                onChange={onChange}
                value={value}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTask;
