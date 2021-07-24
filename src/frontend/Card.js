import React from 'react';
import AddTask from './AddTask';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
const Card = props => {
  return (
    <Router>
      <div className="card-header">
        <b>
          TASKS <label>{0}</label>
        </b>
        <Link to="/addTask">
          <label className="add-task-symbol"> +</label>
        </Link>
      </div>
      <Route exact path="/addTask" render={() => <AddTask />} />
    </Router>
  );
};
export default Card;
