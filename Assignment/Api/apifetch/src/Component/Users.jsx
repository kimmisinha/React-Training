import React from "react";
import { useState, useEffect } from "react";
import "../Component/Users.css";
import axios from "axios";

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Fetched users:", response.data);
        setUsers(response.data);
        console.log(response.data)
      })
      .catch((error) => console.log("Error in fetching users:", error));
  }, []);
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  //   console.log("users:", users);
  //   console.log("setUsers:", setUsers);

  return (
    <div className="user-container">
      {users.map((user) => (
        <div key={user.id} className="user-box">
          <h2>{user.name}</h2>
          <button
            className="close-btn"
            onClick={() => removeUser(user.id)}
          >x</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
