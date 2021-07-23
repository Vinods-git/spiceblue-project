import { getId, addTask } from './httpCalls';
const get_Ids = () => async dispatch => {
  try {
    dispatch({ type: 'GET_IDS_REQUEST' });
    const data = await getId();
    dispatch({ type: 'GET_IDS_SUCCESS', payload: data });
  } catch (error) {
    console.log(error);

    dispatch({ type: 'GET_IDS_FAILED', payload: error.message });
  }
};
const add_Task = async task => {
  try {
    await addTask(task);
    dispatch({ type: 'ADDED_SUCCESSFULLY' });
  } catch (error) {
    dispatch({ type: 'ADD_FAILED' });
  }
};

export { get_Ids, add_Task };
