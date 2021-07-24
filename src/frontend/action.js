import { getUsers, addTask } from './httpCalls';
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
const add_Task = (task)=> async dispatch => {
  try {
    dispatch({ type: 'ADD_REQUEST' });
    var data = await addTask(task);
    dispatch({ type: 'ADDED_SUCCESSFULLY', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_FAILED' });
  }
};

export { get_Users, add_Task };
