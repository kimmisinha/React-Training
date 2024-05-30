import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css'; // Import CSS file

function AddUser() {
  const [inputData, setInputData] = useState({ firstName: '', lastName: '' });

  const handleChangeinputA = (event) => {
    setInputData((prev) => ({ ...prev, firstName: event.target.value }));
  };

  const handleChangeinputB = (event) => {
    setInputData((prev) => ({ ...prev, lastName: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/users', inputData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="add-user-container">
      <label className="add-user-label">First Name</label>
      <input
        type="text"
        className="add-user-input"
        value={inputData.firstName}
        onChange={handleChangeinputA}
      />
      <label className="add-user-label">Last Name</label>
      <input
        type="text"
        className="add-user-input"
        value={inputData.lastName}
        onChange={handleChangeinputB}
      />
      <button className="add-user-button" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}

export default AddUser;
