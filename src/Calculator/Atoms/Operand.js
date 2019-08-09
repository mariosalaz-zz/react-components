import React from "react";

const Operand = ({ value, operandsFunction }) => {
  return (
    <li value={value} onClick={operandsFunction}>
      {value}
    </li>
  );
};

export default Operand;
