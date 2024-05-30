import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="user-container">
      {users.map(user => (
        <div key={user.id} className="user-box">
          <h2>{user.name}</h2>
          <button className="close-btn" onClick={() => removeUser(user.id)}>×</button>
        </div>
      ))}
    </div>
  );
};

export default App;
