import React, { useState } from "react";

export default function State() {
  const [data, setData] = useState(0);

  function updateData() {
    setData(data + 1);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

//state in function component
