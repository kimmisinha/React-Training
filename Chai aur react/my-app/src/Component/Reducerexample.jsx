import React, { useReducer } from "react";

function Reducerexample() {
  const initialState = 0;
  const reducer = (currentState, action) => {
    switch (action) {
      case "Increment":
        return currentState + 1;
      case "Decrement":
        return currentState - 1;
      default:
        return currentState;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="use-reducer-container">
      <h2>{count}</h2>
      <button
        className="use-reducer-button"
        onClick={() => dispatch("Increment")}
      >
        Increment
      </button>
      <button
        className="use-reducer-button"
        onClick={() => dispatch("Decrement")}
      >
        Decrement
      </button>
    </div>
  );
}

export default Reducerexample;
