import React from "react";
import "../Component/Card.css";

function Card({ name, age, designation, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Designation: {designation}</p>
    </div>
  );
}

export default Card;
