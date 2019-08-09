import React from "react";
import Operand from "../Atoms/Operand";
import "../../css/Molecules/operandsKeyboard.scss";

const OperandsKeyboard = ({ operandsFunction }) => {
  const upperOperands = ["%", "(", ")"];
  const operands = ["÷", "x", "-", "+", "=", ".", "++"];
  return (
    <div className='operands-keyboard'>
      <div className='upper-operands'>
        {upperOperands.map(operand => (
          <Operand value={operand} operandsFunction={operandsFunction} />
        ))}
      </div>
      <div className='right-side-operands'>
        {operands.map(operand => (
          <Operand value={operand} operandsFunction={operandsFunction} />
        ))}
      </div>
    </div>
  );
};

export default OperandsKeyboard;
