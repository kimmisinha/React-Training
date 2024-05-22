// Card.js
import React, { useState } from "react";
import "../Component/Card.css";

function Card({ name, age, designation, experiences, achievements, skills }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card" onClick={toggleDetails}>
      <div>

      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Designation: {designation}</p>
      </div>
      <div>
      {isOpen && (
        <div className="details">
          <p>Experiences: {experiences}</p>
          <p>Achievements: {achievements}</p>
          <p>Skills: {skills}</p>
        </div>
      )}
      </div>
      
    </div>
  );
}

export default Card;
