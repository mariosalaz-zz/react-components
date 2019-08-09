import React from "react";
import MainScreen from "../Atoms/MainScreen";
import SummaryScreen from "../Atoms/SummaryScreen";
import "../../css/Molecules/screen.scss";

const Screen = ({ handleInputChange, inputValue, summaryScreenValue }) => {
  return (
    <div className='screen'>
      <SummaryScreen inputValue={inputValue} summaryScreenValue={summaryScreenValue} />
      <MainScreen
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
    </div>
  );
};

export default Screen;
