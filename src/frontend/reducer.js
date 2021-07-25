const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_IDS_REQUEST':
      return { loading: true, users: [], tasks: [...state.tasks] };
    case 'GET_IDS_SUCCESS':
      return { loading: false, users: action.payload, tasks: [...state.tasks] };
    case 'GET_IDS_FAILED':
      return { loading: false, error: action.payload, tasks: [...state.tasks] };
    case 'ADD_REQUEST':
      return { loading: true, tasks: [...state.tasks] };
    case 'ADDED_SUCCESSFULLY':
      return {
        ...state,
        loading: false
      };
    case 'ADDING_FAILED':
      return { ...state, loading: false };
    case 'GET_ALL_TASKS_REQUEST':
      return { loading: true };
    case 'GET_ALL_TASKS_SUCCESS':
      return { loading: false, tasks: action.payload };
    case 'GET_ALL_TASKS_FAILED':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_TASK_REQUEST':
      return { ...state, loading: true };
    case 'DELETE_TASK_SUCCESS':
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter(task => task.id != action.payload)
      };
    case 'DELETE_TASK_FAILED':
      return { ...state, loading: false };
      DELETE_REQUEST;

    default:
      return state;
  }
};
export default reducer;
