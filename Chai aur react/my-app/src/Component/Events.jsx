import React from "react";

function Events() {
  function handleclick() {
    alert("hello");
  }
  return (
    <>
      <h2 style={{ color: "red" }}>Events</h2>
      <button onClick={handleclick}>Button</button>;
    </>
  );
}

export default Events;
