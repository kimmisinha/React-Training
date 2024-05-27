import React, { useRef } from "react";
import  Childref from './Childref'

const Parentref = () => {
  const inputRef = useRef(null);

  
  const handleFocus = () => {
    if (inputRef.current) {
        {console.log(inputRef.current.value)}
      inputRef.current.focus();
    }
  };

  return (
    <div>
      < Childref inputRef={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default Parentref;
