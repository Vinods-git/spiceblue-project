const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_IDS_REQUEST':
      return { loading: true, users: [] };
    case 'GET_IDS_SUCCESS':
      return { loading: false, users: action.payload };
    case 'GET_IDS_FAILED':
      return { loading: false, error: action.payload };
    case 'ADD_REQUEST':
      return { loading: true, tasks: [] };
    case 'ADDED_SUCCESSFULLY':
      return { loading: false, msg: action.payload };
    case 'ADDING_FAILED':
      return { loading: false, msg: action.payload };
    case 'GET_ALL_TASKS_REQUEST':
      return { loading: true, tasks: [] };
    case 'GET_ALL_TASKS_SUCCESS':
      return { loading: false, tasks: action.payload };
    case 'GET_ALL_TASKS_FAILED':
      return { loading: false, error: action.payload };
      case 'DELETE_TASK_REQUEST':
        return {...state, loading: true };
      case 'DELETE_TASK_SUCCESS':
        return { loading: false, tasks: action.payload };
      case 'DELETE_TASK_FAILED':
        return { loading: false, error: action.payload };
      DELETE_REQUEST

    default:
      return state;
  }
};
export default reducer;
