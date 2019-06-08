import React from "react";
import Operand from "../Atoms/Operand";

const OperandsKeyboard = () => {
  const operands = ["%", "(", ")", "/", "x", "-", "+", "=", ".", "++"];
  return (
    <div className="operands-keyboard">
      {operands.map(operand => (
        <Operand value={operand} />
      ))}
    </div>
  );
};

export default OperandsKeyboard;
