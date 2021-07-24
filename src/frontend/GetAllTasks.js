import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const GetAllTasks = props => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { loading, tasks } = state;

  useEffect(async () => {
    dispatch(get_All_Tasks());
  }, []);
  return (<div>
     
    </div>)
   
};
export default GetAllTasks;
