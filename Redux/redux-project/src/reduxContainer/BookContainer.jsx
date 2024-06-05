import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book, buying_book, percentageBook } from "./BookAction";

function BookContainer() {
  const Numberofbook = useSelector((state) => state.Numberofbook);
  const Totalnobook = useSelector((state) => state.Totalnobook);
  const profitPercentage = useSelector((state) => state.profitPercentage);

  const [percentage, setPercentage] = useState(1);
  const dispatch = useDispatch();
  console.log(purchase_book);
  return (
    <>
      <div>BookContainer</div>
      <h1>count:{Numberofbook}</h1>
      <h2>count:{Totalnobook}</h2>
      <h3>Profit Percentage: {profitPercentage}%</h3>
      <button
        onClick={() => {
          dispatch(purchase_book());
        }}
      >
        SellBook
      </button>
      <br></br>
      <button onClick={() => dispatch(buying_book())}>BuyBook</button>
      <br />
      <br />
      <label>percentage</label>
      <input
        type="text"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
        min="1"
      />
      <button onClick={() => dispatch(percentageBook(percentage))}>
        Percentage Profit
      </button>

      <br />
    </>
  );
}

export default BookContainer;
