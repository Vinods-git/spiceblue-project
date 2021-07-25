import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import EditTask from './EditTask';
import ViewTask from './ViewTask';
import Alert from './Alert';
import GetAllTasks from './GetAllTasks';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Card = props => {
  const state = useSelector(state => state);
  const [length, setLength] = useState(0);
  const [flag, setFlag] = useState(0);

  return (
    <Router>
      <div className="card-header">
        <b>
          TASKS <label>{state.tasks?.length}</label>
        </b>
        <Link to="/addTask">
          <label className="add-task-symbol"> +</label>
        </Link>
      </div>

      <Route exact path="/" component={GetAllTasks} />
      <Route exact path="/addTask" render={() => <AddTask />} />
      <Route exact path="/editTask" component={EditTask} />
      <Route exact path="/viewTask" component={ViewTask} />
    </Router>
  );
};
export default Card;
