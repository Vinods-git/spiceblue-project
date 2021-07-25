import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import EditTask from './EditTask';
import Alert from './Alert';
import GetAllTasks from './GetAllTasks';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Card = props => {
  const state = useSelector(state => state);
  const [length, setLength] = useState(0);
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    if (length < state.tasks?.length) setFlag(1);
    setLength(state.tasks?.length);
  }, [state.tasks?.length]);
  return (
    <Router>
      <div className="card-header">
        <b>
          TASKS <label>{state.tasks?.length}</label>
        </b>
        <Link to="/addTask">
          <label className="add-task-symbol"> +</label>
        </Link>
        {flag ? <Alert /> : <></>}
        );
      </div>

      <Route exact path="/" component={GetAllTasks} />
      <Route exact path="/addTask" render={() => <AddTask />} />
      <Route exact path="/editTask" component={EditTask} />
    </Router>
  );
};
export default Card;
