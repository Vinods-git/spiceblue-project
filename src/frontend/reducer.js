const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_IDS_REQUEST':
      return {loading:true,ids:[]}
      case 'GET_IDS_SUCCESS':
      return {loading:false,ids:action.payload}
      case 'GET_IDS_FAILED':
      return {loading:false,error:action.payload}
    default:
      return state;
  }
};
export default reducer;
