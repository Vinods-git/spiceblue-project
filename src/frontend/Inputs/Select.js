import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  return (
    <div>
      <Select
        className="select"
        labelId="demo-simple-select-label"
        className="select"
        id="demo-simple-select"
        label="Assign User"
        value=""
      >
        {props.users?.map(user => (
          <MenuItem key={user.first}>{user.first}</MenuItem>
        ))}
      </Select>
    </div>
  );
}
