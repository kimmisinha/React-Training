import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

function Todo() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");

  function handleChange(e) {
    setNewMember(e.target.value);
  }

  function handleAdd() {
    setMembers((prev) => [...prev, { id: uuidv4(), value: newMember }]);
    setNewMember("");
  }

  function handleDelete(taskId) {
    setMembers(members.filter((member) => taskId !== member.id));
  }

  return (
    <div className="todo-app">
      <h1 className="todo-heading">Todo List</h1>
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
        {members.map((task) => (
          <div key={task.id} className="todo-item">
            <span>{task.value}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
