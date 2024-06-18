import React from "react";
import { useState } from "react";

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [role, setRole] = useState("subadmin");

  let message = null;
  if (showMessage) {
    message = <h2>Show this message</h2>;
  } else {
    message = (
      <button onClick={() => setShowMessage(true)}>Show Message</button>
    );
  }

  let result = "";
  switch (role) {
    case "admin":
      result = <p>Welcome admin</p>;
      break;
    case "subadmin":
      result = <p>Welcome subadmin</p>;
      break;
    default:
      result = <p>Unknown role</p>;
  }

  return (
    <div>
      <h2>State-Based Conditional Rendering</h2>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}

      <h2>Logical && Operator for Conditional Rendering</h2>
      {visible && (
        <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      )}

      <br />
      {message}

      <button onClick={() => setRole("admin")}>Set Role to Admin</button>
      <br />
      <button onClick={() => setRole("subadmin")}>Set Role to Subadmin</button>

      {result}
    </div>
  );
}

export default Conditional;
