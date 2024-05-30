import React from "react";

function PropComponent({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
    </div>
  );
}

export default PropComponent;
