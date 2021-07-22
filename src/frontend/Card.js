import React from 'react';
import AddTask from './AddTask';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const Card = props => {
  return (
    <Router>
      <div class="card-header">
        <b>
          TASKS <span>{0}</span>
        </b>
        <Link className="add-task-symbol" to="/addTask">
          +
        </Link>
      </div>
      <Route exact path="/addTask" render={AddTask} />
    </Router>
  );
};
export default Card;
