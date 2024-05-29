import React, { useState } from "react";
function Toggle() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <h1>Hello World !</h1> : null}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default Toggle;
