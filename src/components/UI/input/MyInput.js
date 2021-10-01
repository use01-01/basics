import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({ ...props }) => {
  return <input type="text" className={classes.MyInput} {...props} />;
};

export default MyInput;
