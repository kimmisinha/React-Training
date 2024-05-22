import React, { useState } from "react";
import Card from "./Component/Card";
import DetailsCard from "./Component/DetailsCard";
import "./Component/Card.css";

function App() {
  const [selectedPerson, setSelectedPerson] = useState(false);
  const persons = [
    {
      name: "Johan",
      age: 30,
      designation: "Software Engineer",
      experiences: "5 years",
      achievements: "Awarded Best Employee",
      skills: "JavaScript, React, Node.js",
    },
    {
      name: "Anna",
      age: 25,
      designation: "UI/UX Designer",
      experiences: "4 years",
      achievements: "Top Designer Award",
      skills: "Sketch, Figma, CSS",
    },
    {
      name: "John",
      age: 35,
      designation: "Project Manager",
      experiences: "10 years",
      achievements: "Managed 50+ projects",
      skills: "Leadership, Agile, Scrum",
    },
    {
      name: "Emma",
      age: 28,
      designation: "Frontend Developer",
      experiences: "6 years",
      achievements: "Lead Frontend Team",
      skills: "HTML, CSS, JavaScript",
    },
    {
      name: "David",
      age: 40,
      designation: "Backend Developer",
      experiences: "12 years",
      achievements: "Architected Scalable Systems",
      skills: "Node.js, MongoDB, Docker",
    },
    {
      name: "Sophia",
      age: 32,
      designation: "Data Scientist",
      experiences: "8 years",
      achievements: "Developed AI Models",
      skills: "Python, R, Machine Learning",
    },
  ];

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  function handleClick() {
    setSelectedPerson(false);
  }

  return (
    <>
      <div class="container">
        <div class="item">200 X 100</div>
      </div>

      <div className="app-container">
        <div className="card-grid">
          {persons.map((person, index) => (
            <Card
              key={index}
              {...person}
              onClick={() => handleCardClick(person)}
            />
          ))}
        </div>
        <div className="details-row">
          {selectedPerson && (
            <DetailsCard {...selectedPerson} onClick={handleClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
