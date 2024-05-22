import React, { useState } from "react";

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
    </div>
  );
}

export default JsxComponent;
