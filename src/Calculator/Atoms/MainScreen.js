import React from "react";

const MainScreen = ({ handleInputChange, inputValue }) => {
  return (
    <input
      type="text"
      id="screen-input"
      onChange={handleInputChange}
      value={inputValue}
    />
  );
};

export default MainScreen;
