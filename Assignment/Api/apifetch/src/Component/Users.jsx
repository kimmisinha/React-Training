import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Component/Users.css";
import axios from "axios";
import axiosInstance from "../Component/Axiosinstance";

function Users() {
  let [users, setUsers] = useState([]);
  const Navigate = useNavigate();
  const Location = useLocation();
  /*
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
  */
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  //   console.log("users:", users);
  //   console.log("setUsers:", setUsers);

  function handlesubmit() {
    Navigate("/addusers");
  }
  console.log("Current location:", Location);
  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((response) => {
        console.log("Fetched users:", response.data);
        setUsers(response.data);
      })
      .catch((error) => console.log("Error in fetching users:", error));
  }, []);

  return (
    <div className="user-container">
      {Location.pathname === "/" && <h1>welcome to userpage</h1>}
      {users.map((user) => (
        <div key={user.id} className="user-box">
          <h2>{user.name}</h2>
          <button className="close-btn" onClick={() => removeUser(user.id)}>
            x
          </button>
        </div>
      ))}
      <Link to="/adduser">Add User</Link>
      <button onClick={handlesubmit} className="add-user-btn">
        Navigate button
      </button>
    </div>
  );
}

export default Users;
