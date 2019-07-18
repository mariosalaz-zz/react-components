import React from "react";
import Operand from "../Atoms/Operand";
import "../../css/Molecules/operandsKeyboard.scss";

const OperandsKeyboard = () => {
  const upperOperands = ["%", "(", ")"];
  const operands = ["/", "x", "-", "+", "=", ".", "++"];
  return (
    <div className='operands-keyboard'>
      <div className='upper-operands'>
        {upperOperands.map(operand => (
          <Operand value={operand} />
        ))}
      </div>
      <div className='right-side-operands'>
        {operands.map(operand => (
          <Operand value={operand} />
        ))}
      </div>
    </div>
  );
};

export default OperandsKeyboard;
