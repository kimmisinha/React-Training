import React, { useState } from "react";

function ControlledComponent() {
  const [value, setvalue] = useState(0);
  return (
    <div>
      <h1>ControlledComponent</h1>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      {console.log(value)}
    </div>
  );
}

export default ControlledComponent;

/*

A controlled component is a form element (input, textarea, select, etc.) 
whose value is controlled by React state. In other words, the value of 
the form element is bound to the state of a React component, and any changes 
to the form element's value are handled by updating the state.

*/
