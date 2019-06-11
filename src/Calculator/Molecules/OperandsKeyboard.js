import React from "react";
import Operand from "../Atoms/Operand";

const OperandsKeyboard = () => {
  const operands = ["%", "(", ")", "/", "x", "-", "+", "=", ".", "++"];
  return (
    <div className="operandsKeyboard">
      {operands.map(operand => (
        <Operand value={operand} />
      ))}
    </div>
  );
};

export default OperandsKeyboard;
