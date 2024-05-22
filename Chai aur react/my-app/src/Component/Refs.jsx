import React, { useEffect, useRef } from "react";

function Refs() {
  const inputref = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Directly focus the input field
  }, []);

  return (
    <>
      <input type="text" ref={inputref}></input>
    </>
  );
}

export default Refs;
