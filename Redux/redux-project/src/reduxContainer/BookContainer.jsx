import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book } from "./BookAction";

function BookContainer() {
  const Numberofbook = useSelector((state) => state.Numberofbook);
  const dispatch = useDispatch();
  console.log(purchase_book);
  return (
    <>
      <h1>count:{Numberofbook}</h1>
      <div>BookContainer</div>
      <button
        onClick={() => {
          dispatch(purchase_book());
        }}
      >
        Book
      </button>
    </>
  );
}

export default BookContainer;
