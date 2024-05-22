import React from "react";
import Card from "./Component/Card";

function App() {
  const persons = [
    { name: "Johan", age: 30, designation: "Software Engineer" , experiences: "5 years",achievements: "Awarded Best Employee", skills: "JavaScript, React, Node.js"},
    { name: "Anna", age: 25, designation: "UI/UX Designer",experiences: "5 years",achievements: "Awarded Best Employee", skills: "JavaScript, React, Node.js" },
    { name: "John", age: 35, designation: "Project Manager" ,experiences: "5 years",achievements: "Awarded Best Employee", skills: "JavaScript, React, Node.js"},
    { name: "Emma", age: 28, designation: "Frontend Developer",experiences: "5 years",achievements: "Awarded Best Employee", skills: "JavaScript, React, Node.js"},
    { name: "David", age: 40, designation: "Backend Developer",experiences: "5 years",achievements: "Awarded Best Employee", skills: "JavaScript, React, Node.js" },
    { name: "Sophia", age: 32, designation: "Data Scientist",experiences: "5 years",achievements: "Awarded Best Employee", skills: "JavaScript, React, Node.js" },

  ];

  return (
    <>
      <div class="container">
        <div class="item">200 X 100</div>
      </div>
      <div className="card-container">
        {persons.map((person, index) => (
          <Card key={index} {...person} />
        ))}
      </div>
    </>
  );
}

export default App;
