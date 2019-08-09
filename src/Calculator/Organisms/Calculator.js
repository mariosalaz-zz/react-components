import React, { Component } from "react";
import Header from "../Atoms/Header";
import Screen from "../Molecules/Screen";
import NumericKeyboard from "../Molecules/NumericKeyboard";
import OperandsKeyboard from "../Molecules/OperandsKeyboard";
import "../../css/Organisms/calculator.scss";

class Calculator extends Component {
  state = {
    mainScreenValue: "",
    summaryScreen: "",
    firstValue: "",
    secondValue: "",
    result: ""
  };

  handleInputChange = e => {
    const mainScreenValue = e.target.value;
    this.setState({ mainScreenValue });
  };

  handleClickChange = e => {
    const actualNumber = this.state.mainScreenValue;
    let mainScreenValue = e.target.value + actualNumber;

    this.setState({ mainScreenValue });
  };

  operandsFunction = ({ target }) => {
    const { textContent } = target;
    const { result, mainScreenValue } = this.state

    switch (textContent) {
      case "+":
        const firstValue = mainScreenValue;
        this.setState({ firstValue, mainScreenValue: "" });



      default:
        console.log("gg");
    }
  };

  render() {
    const { mainScreenValue, count } = this.state;
    const { handleInputChange, handleClickChange, operandsFunction, summaryScreen } = this;

    return (
      <div className='calculator'>
        <Header />
        <Screen
          inputValue={mainScreenValue}
          handleInputChange={handleInputChange}
          summaryScreenValue={summaryScreen}
        />
        <OperandsKeyboard operandsFunction={operandsFunction} />
        <NumericKeyboard handleClickChange={handleClickChange} />
      </div>
    );
  }
}

export default Calculator;
