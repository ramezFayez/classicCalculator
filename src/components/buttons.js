import React from "react";

const Buttons = ({ symbol, color, handleClic }) => {
  return (
    <div
      className="button-wrapper"
      style={{ backgroundColor: color }}
      onClick={() => handleClic(symbol)}
    >
      {symbol}
    </div>
  );
};

export default Buttons;
