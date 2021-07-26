import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../components/Task';
import { get_All_Tasks, delete_Task } from '../action';
import { Link, useHistory } from 'react-router-dom';

const GetAllTasks = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loading, tasks, error } = state;
  const history = useHistory();

  const deleteHandler = id => {
    // console.log(id);
    var retVal = confirm('Are sure you want to delete the task ?');
    if (retVal == true) {
      dispatch(delete_Task(id));
      history.push('/');
      alert('Task has been deleted');
    }

    // dispatch(get_All_Tasks());
  };

  useEffect(async () => {
    dispatch(get_All_Tasks());
    // console.log(tasks);
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
