import React, { useState } from "react";
import { Outlet } from "react-router-dom";
function FunctionComponent() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>FunctionComponent Increment</button>
      <Outlet />
    </div>
  );
}

export default FunctionComponent;
