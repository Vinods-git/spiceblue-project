import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import GetAllTasks from './GetAllTasks';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Card = props => {
  const count = useSelector(state => state.tasks?.length);
  return (
    <Router>
      <div className="card-header">
        <b>
          TASKS <label>{count}</label>
        </b>
        <Link to="/addTask">
          <label className="add-task-symbol"> +</label>
        </Link>
      </div>

      <Route exact path="/" render={() => <GetAllTasks />} />
      <Route exact path="/addTask" render={() => <AddTask />} />
    </Router>
  );
};
export default Card;
