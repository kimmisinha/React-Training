import React from "react";
import "../Component/Card.css";

function Card({ name, age, designation }) {
  return (
    <div className="card">
      <h2>Name:{name}</h2>
      <p>age:{age}</p>
      <p>{designation}</p>
    </div>
  );
}

export default Card;
