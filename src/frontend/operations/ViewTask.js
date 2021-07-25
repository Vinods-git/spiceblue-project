import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';
import Button from './Inputs/Button';
// import React from 'react';
// const ViewTask = props => {
//   const { task } = props.location;
//   console.log(task);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const ViewTask = props => {
  const { task } = props.location;
  console.log(task);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary={`Task ID : ${task.id}`} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={`Task Description : ${task.task_msg}`} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={`Task Created at : ${task.created}`} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={`Assigned User : ${task.assigned_user}`} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={`Task Status : ${task.status}`} />
        </ListItem>
      </List>
      <Link className="back" to="/">
        <Button value={'Back'} />
      </Link>
    </div>
  );
};
export default ViewTask;
