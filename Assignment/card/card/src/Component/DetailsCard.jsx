import React, { useState } from "react";
import "../Component/Card.css";

function DetailsCard({
  name,
  age,
  designation,
  experiences,
  achievements,
  skills,
  onClick,
}) {
  return (
    <div className="details-card" onClick={onClick}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Designation: {designation}</p>
      <p>Experiences: {experiences}</p>
      <p>Achievements: {achievements}</p>
      <p>Skills: {skills}</p>
    </div>
  );
}

export default DetailsCard;
