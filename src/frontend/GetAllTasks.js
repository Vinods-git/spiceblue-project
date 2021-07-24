import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { get_All_Tasks } from './action';
const GetAllTasks = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loading, tasks, error } = state;

  useEffect(async () => {
    dispatch(get_All_Tasks());
  }, []);
  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <ul className='task-list'>
          {tasks?.map(task => (
            
              <Task task_date={task.task_date}  task_msg={task.task_msg}/>
            
          ))}
        </ul>
      )}
    </>
  );
};
export default GetAllTasks;
