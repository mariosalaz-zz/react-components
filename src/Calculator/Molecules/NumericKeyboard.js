import React from "react";
import Number from "../Atoms/Number";
import "../../css/Molecules/numericKeyboard.scss";

const NumericKeyboard = ({ handleClickChange }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className='numeric-keyboard'>
      {numbers.map((number, key) => (
        <Number
          value={number}
          key={key}
          handleClickChange={handleClickChange}
        />
      ))}
    </div>
  );
};

export default NumericKeyboard;
