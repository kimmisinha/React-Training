import React, { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");
  function handleChange(e) {
    setNewMember(e.target.value);
  }
  function handleAdd() {
    // setMembers([...members, { id: uuidv4(), value: newMember}]);
    setMembers((prev) => [...prev, { id: uuidv4(), value: newMember }]);
    setNewMember("");
  }
  function handleDelete(index) {
    setMembers(members.filter((member, index2) => index !== index2));
  }
  /*
   {console.log("members",members)}
   {console.log("setMembers",setMembers)}
   {console.log("newMember",newMember)}
   {console.log("setNewMember",setNewMember)}
*/
  return (
    <div className="todo-app">
      <div className="input-container">
        <input
          type="text"
          value={newMember}
          onChange={handleChange}
          placeholder="Enter the full name"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="todo-list">
        {members.map((value, index) => (
          <div key={value.id} className="todo-item">
            {console.log("members", members)}
            {console.log("value", value)}
            {console.log("index", index)}
            <span>{value.value}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
