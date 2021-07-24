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
      return {loading:false,};

    default:
      return state;
  }
};
export default reducer;
