import React from "react";
import "./Style.css";
const styleItem = { color: "red", backgroundColor: "black" };

const Style = () => {
  return (
    <div>
      <h1 className="primary">Style type 1 in react</h1>
      <h2 style={{ color: "blue" }}>Style type 2 in React js</h2>
      <h1 style={styleItem}>Style type 3 in React js</h1>
    </div>
  );
};

export default Style;
