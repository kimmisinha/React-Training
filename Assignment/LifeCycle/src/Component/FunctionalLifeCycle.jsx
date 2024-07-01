import React, { useEffect, useState } from "react";

function FunctionalLifeCycle() {
  let [click, setclick] = useState(0);
  function clickMe() {
    setclick(click + 1);
  }

  // mounted phase
  useEffect(() => {
    console.log("Component got mounted");
  }, []);
  // updating phase

  useEffect(() => {
    console.log("Component got updated");
  }, [click]);

  //component will umounting
  useEffect(() => {
    return () => {
      console.log("Component got umounting");
    };
  });
  return (
    <>
      <h3>{click}</h3>
      <button onClick={clickMe}> FunctionalLifeCycle</button>
    </>
  );
}

export default FunctionalLifeCycle;
