import React from "react";
import { memo } from "react";
export default memo(function Counter2({ name }) {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
});
