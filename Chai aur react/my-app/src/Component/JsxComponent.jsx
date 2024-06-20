import React, { useState } from "react";
import FunctionComponent from "./FunctionComponent";
import Conditional from "./Conditional";
let parentdata = "hello I am props passed parent to child component";
let datadetails = "passing props as common parent";
function JsxComponent() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" value={name} onChange={handleChange} />
      <h2>Your name is: {name}</h2>
      <FunctionComponent data={parentdata} />
      <Conditional data={datadetails} />
    </div>
  );
}

export default JsxComponent;
