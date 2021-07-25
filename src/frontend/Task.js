import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Task(props) {
  const classes = useStyles();
  const { editHandler, deleteHandler, completeTaskHandler } = props;

  const { task_msg, task_date, id } = props.task;
  return (
    <>
      <ListItem className="list">
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={task_msg} secondary={task_date} />
        <Link to="/editTask">
          <EditIcon onClick={() => editHandler(id)} />
        </Link>

        <DoneRoundedIcon onClick={() => completeTaskHandler(id)} />
        <DeleteRoundedIcon onClick={() => deleteHandler(id)} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
