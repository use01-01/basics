import React from 'react';
import classes from './MyLabel.module.css';

const MyLabel = ({ children, ...props }) => {
  return (
    <label htmlFor={props.inputId} className={classes.MyLabel}>
      {children}
    </label>
  );
};

export default MyLabel;
