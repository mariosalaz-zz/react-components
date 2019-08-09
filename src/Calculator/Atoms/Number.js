import React from "react";

const Number = ({ value, handleClickChange }) => {
  return (
    <li onClick={handleClickChange} value={value}>
      {value}
    </li>
  );
};

export default Number;
