import React, { useState, forwardRef, useImperativeHandle } from "react";

const Refs = (props, ref) => {
  const [text, setText] = useState(
    "this is child component it will access by parent component"
  );

  // Define the function before using it in useImperativeHandle
  const changeText = () => {
    setText("text changed from parent to child component");
  };

  useImperativeHandle(ref, () => ({
    changeText
  }));

  return (
    <>
      <div>Passing data child to parent using useref</div>
      {text}
    </>
  );
};

export default forwardRef(Refs);
