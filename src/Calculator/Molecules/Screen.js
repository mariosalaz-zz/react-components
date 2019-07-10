import React from "react";
import MainScreen from "../Atoms/MainScreen";
import SummaryScreen from "../Atoms/SummaryScreen";
import "../../main.css";

const Screen = ({ handleInputChange, inputValue }) => {
  return (
    <div className="screen">
      <SummaryScreen />
      <MainScreen
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
    </div>
  );
};

export default Screen;
