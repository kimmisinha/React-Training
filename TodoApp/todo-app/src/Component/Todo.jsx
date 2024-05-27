import React, { useState } from 'react';
import './Todo.css';

function App() {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState('');

  function handleChange(e) {
    setNewMember(e.target.value);
  }

  function handleAdd() {
    setMembers([...members, newMember]);
    setNewMember('');
  }

  function handleDelete(index) {
    setMembers(members.filter((member, index2) => index !== index2));
  }

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
          <div key={value} className="todo-item">
            <span>{value}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
