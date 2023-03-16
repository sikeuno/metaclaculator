import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    inputRef.current.value = "";
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.value = "";
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    inputRef.current.value = "";
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    inputRef.current.value = "";
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef} className="result">
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          className="input-field"
        />
        <button onClick={plus} className="math-button">
          add
        </button>
        <button onClick={minus} className="math-button">
          subtract
        </button>
        <button onClick={times} className="math-button">
          multiply
        </button>
        <button onClick={divide} className="math-button">
          divide
        </button>
        <button onClick={resetInput} className="reset-button">
          Reset Input
        </button>
        <button onClick={resetResult} className="reset-button">
          Reset Result
        </button>
      </form>
    </div>
  );
}

export default App;
