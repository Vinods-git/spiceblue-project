import { getUsers, getAllTasks, addTask, deleteTask } from './httpCalls';
const get_Users = () => async dispatch => {
  try {
    dispatch({ type: 'GET_IDS_REQUEST' });
    const data = await getUsers();
    console.log(data);

    dispatch({ type: 'GET_IDS_SUCCESS', payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: 'GET_IDS_FAILED', payload: error.message });
  }
};
const get_All_Tasks = () => async dispatch => {
  try {
    dispatch({ type: 'GET_ALL_TASKS_REQUEST' });
    const results = await getAllTasks();
    dispatch({ type: 'GET_ALL_TASKS_SUCCESS', payload: results });
  } catch (error) {
    console.log(error);
    // console.log('Vert ');
    dispatch({ type: 'GET_ALL_TASKS_FAILED', payload: error.message });
  }
};
const add_Task = task => async dispatch => {
  try {
    dispatch({ type: 'ADD_REQUEST' });
    await addTask(task);
    // console.log(data);
    dispatch({ type: 'ADDED_SUCCESSFULLY', payload: task });
  } catch (error) {
    dispatch({ type: 'ADD_FAILED', payload: error });
  }
};
const delete_Task = id => async dispatch => {
  try {
    dispatch({ type: 'DELETE_TASK_REQUEST' });
    await deleteTask(id);
    dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
  } catch (error) {
    console.log(e);
    dispatch({ type: 'DELETE_TASK_FAILED', payload: error });
  }
};

export { get_Users, add_Task, get_All_Tasks, update_Task, delete_Task };
