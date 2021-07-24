import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      className="input"
      id="standard-required"
      label="Description"
    />
  );
}
