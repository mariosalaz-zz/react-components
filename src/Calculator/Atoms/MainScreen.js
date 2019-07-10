import React from "react";

const MainScreen = ({ handleInputChange, inputValue }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        id="screen-input"
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default MainScreen;
