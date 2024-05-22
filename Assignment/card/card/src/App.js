import "./App.css";
import Card from "./Component/Card";

const person = {
  name: "Johan",
  age: 30,
  designation: "Software Engineer",
};

function App() {
  return (
    <div>
      <h1>Employee Details</h1>
      <Card
        name={person.name}
        age={person.age}
        designation={person.designation}
      />
    </div>
  );
}

export default App;
