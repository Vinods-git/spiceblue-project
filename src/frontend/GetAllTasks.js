import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import axios from 'axios';
import { get_All_Tasks, delete_Task } from './action';
import { Link, useHistory } from 'react-router-dom';

const GetAllTasks = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loading, tasks, error } = state;
  const history = useHistory();
  const editHandler = id => {
    console.log('edit');
  };
  const deleteHandler = id => {
    // console.log(id);
    dispatch(delete_Task(id));
    // dispatch(get_All_Tasks());
    history.push('/');
  };

  useEffect(async () => {
    dispatch(get_All_Tasks());
  }, []);
  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <ul className="task-list">
          {tasks?.map(task => (
            <Task key={task.id} task={task} deleteHandler={deleteHandler} />
          ))}
        </ul>
      )}
    </>
  );
};
export default GetAllTasks;
