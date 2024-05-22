import React from "react";

function items() {
  let items = ["Key1", "Key2", "Key3", "Key4"];
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
}

export default items;
