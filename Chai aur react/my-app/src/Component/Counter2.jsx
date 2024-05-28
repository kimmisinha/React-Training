import React from "react";
import { memo } from "react";
export default memo(function Counter2({ name }) {
  {
    console.log(name);
  }

  return (
    <>
      <h2>{name}</h2>
    </>
  );
});
