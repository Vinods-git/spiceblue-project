import { Link } from 'react-router-dom';
import Button from './Inputs/Button';
import React from 'react';
const ViewTask = props => {
  const { task } = props.location;
  console.log(task);

  return (
    <>
      <ul>
        <li>{`Task ID : ${task.id}`}</li>
        <li>{`Task Description : ${task.task_msg}`}</li>
        <li>{`Task Created at : ${task.created}`}</li>
        <li>{`Assigned User : ${task.assigned_user}`}</li>
        <li>{`Task Status : ${task.status}`}</li>
      </ul>
      <Link className="back" to="/">
        <Button value={'Back'} />
      </Link>
    </>
  );
};
export default ViewTask;
