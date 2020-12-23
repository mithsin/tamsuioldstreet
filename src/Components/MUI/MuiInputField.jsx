import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useInputStyles } from './styles';

const MuiInputField = ({
  props, 
  defaultValue,
  required,
  type,
  name, 
  label, 
  onChange,
  onKeyPress
}) => {
    const classes = useInputStyles(props);
    return (
      <TextField
        className={classes.inputStyle}
        label={label}
        {...{required: required}}
        type={type? type : 'text'}
        name={name}
        variant="outlined"
        onChange={onChange}
        { ...defaultValue && {defaultValue: defaultValue}}
        { ...onKeyPress && {onKeyPress: onKeyPress}}
        // InputProps={{ classes, disableunderline: "true" }} 
        />
)};

export default MuiInputField;