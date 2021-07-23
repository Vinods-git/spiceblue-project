import getId from './httpCalls';
const get_Ids = () => async dispatch => {
  try {
    dispatch({ type: 'GET_IDS_REQUEST' });
    const data = await getId();
    console.log(data);
    dispatch({ type: 'GET_IDS_SUCCESS', payload: data });
  } catch (error) {
    console.log(error);

    dispatch({ type: 'GET_IDS_FAILED', payload: error.message });
  }
};

export default get_Ids;
