import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import EditTask from './EditTask';
import GetAllTasks from './GetAllTasks';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Card = props => {
  const state = useSelector(state => state);
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
    </Router>
  );
};
export default Card;
