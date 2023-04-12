import "./App.css";
import Input from "./components/input";
import Buttons from "./components/buttons";
import { useState } from "react";
import { evaluate } from "mathjs";
import * as math from "mathjs";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("0");

  const addToText = (symbol) => {
    setText((text) => [...text, symbol + " "]);
  };

  const calculateResult = () => {
    const input = text.join(""); // for removing comas
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("0");
  };

  const buttonColor = "#f2a33c";
  return (
    <div className="App">
      <div className="clac-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Buttons symbol={"7"} handleClic={addToText} />
          <Buttons symbol={"8"} handleClic={addToText} />
          <Buttons symbol={"9"} handleClic={addToText} />
          <Buttons symbol={"/"} color={buttonColor} handleClic={addToText} />
        </div>
        <div className="row">
          <Buttons symbol={"4"} handleClic={addToText} />
          <Buttons symbol={"5"} handleClic={addToText} />
          <Buttons symbol={"6"} handleClic={addToText} />
          <Buttons symbol={"*"} color={buttonColor} handleClic={addToText} />
        </div>
        <div className="row">
          <Buttons symbol={"1"} handleClic={addToText} />
          <Buttons symbol={"2"} handleClic={addToText} />
          <Buttons symbol={"3"} handleClic={addToText} />
          <Buttons symbol={"-"} color={buttonColor} handleClic={addToText} />
        </div>
        <div className="row">
          <Buttons symbol={"."} handleClic={addToText} />
          <Buttons symbol={"0"} handleClic={addToText} />
          <Buttons symbol={"="} handleClic={calculateResult} />
          <Buttons symbol={"+"} color={buttonColor} handleClic={addToText} />
        </div>
        <Buttons symbol={"Clear"} color={"red"} handleClic={resetInput} />
      </div>
    </div>
  );
}

export default App;
