import React, { Component } from "react";
import Header from "../Atoms/Header";
import Screen from "../Molecules/Screen";
import NumericKeyboard from "../Molecules/NumericKeyboard";
import OperandsKeyboard from "../Molecules/OperandsKeyboard";

class Calculator extends Component {
  state = {
    mainScreenValue: 0,
    count: 3
  };

  handleInputChange = e => {
    const mainScreenValue = e.target.value;
    this.setState({ mainScreenValue });
  };
  render() {
    const { mainScreenValue, count } = this.state;
    const { handleInputChange } = this;

    return (
      <div className="calculator">
        <Header />
        <Screen
          inputValue={mainScreenValue}
          handleInputChange={handleInputChange}
        />
        <OperandsKeyboard />
        <NumericKeyboard />
      </div>
    );
  }
}

export default Calculator;
