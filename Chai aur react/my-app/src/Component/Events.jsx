import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

let users=["token1","loginTime","loginlogout"]

function Events() {
  function handleclick() {
    alert("hello");
  }
  return (
    <>
      <h2 style={{ color: "red" }}>Events</h2>
      <button onClick={handleclick}>Button</button>;
       {users.length>0 ? <Outlet /> : <Navigate to='/FunctionComponent' />}    </>
  );
}

export default Events;
