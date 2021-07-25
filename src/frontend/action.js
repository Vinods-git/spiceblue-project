import {
  getUsers,
  getAllTasks,
  addTask,
  deleteTask,
  editTask
} from './httpCalls';
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
    const data = await addTask(task);
    dispatch({ type: 'ADDED_SUCCESSFULLY', payload: data });
  } catch (error) {
    console.log(error);

    dispatch({ type: 'ADDING_FAILED', payload: error });
  }
};
const edit_Task = (task,id) => async dispatch => {
  try {
    dispatch({ type: 'EDIT_REQUEST' });
    const data = await editTask(task,id);
    dispatch({ type: 'EDITED_SUCCESSFULLY', payload: data });
  } catch (error) {
    console.log(error);

    dispatch({ type: 'EDITING_FAILED', payload: error });
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

export {
  get_Users,
  add_Task,
  get_All_Tasks,
  update_Task,
  delete_Task,
  edit_Task
};
