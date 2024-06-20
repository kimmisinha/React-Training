import React from "react";

function Conditional({ data }) { 
  console.log(data); 

  let result = true; 
  return (
    <>
      {result ? <h2>You are true</h2> : <h2>You are wrong</h2>}
      <br />
      <h2>datadetails: {data}</h2> 
    </>
  );
}

export default Conditional;
