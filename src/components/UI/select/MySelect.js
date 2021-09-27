import React from 'react';

const MySelect = (props) => {
  return (
    <select
      value={props.value}
      onChange={(e) => props.sortPost(e.target.value)}
    >
      <option value="" disabled>
        {props.defaultValue}
      </option>
      {props.options.map((option, i) => {
        return (
          <option value={option.value} key={i}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
