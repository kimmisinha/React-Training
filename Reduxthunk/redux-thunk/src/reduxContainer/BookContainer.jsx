import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book, buying_book, percentageBook, userdetails } from "./BookAction";

function BookContainer() {
  const Numberofbook = useSelector((state) => state.Numberofbook);
  const Totalnobook = useSelector((state) => state.Totalnobook);
  const profitPercentage = useSelector((state) => state.profitPercentage);

  const [form, setForm] = useState({
    name: "",
    age: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (["street", "city", "state", "zip"].includes(name)) {
      setForm((prevForm) => ({
        ...prevForm,
        address: {
          ...prevForm.address,
          [name]: value,
        },
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userdetails(form));
  };

  const dispatch = useDispatch();

  return (
    <>
      <div>BookContainer</div>
      <h1>Count of Books: {Numberofbook}</h1>
      <h2>Total Books: {Totalnobook}</h2>
      <h3>Profit Percentage: {profitPercentage}%</h3>
      <button onClick={() => dispatch(purchase_book())}>Sell Book</button>
      <br />
      <button onClick={() => dispatch(buying_book())}>Buy Book</button>
      <br />
      <br />
      <label>Percentage</label>
      <input
        type="text"
        value={profitPercentage}
        onChange={(e) => dispatch(percentageBook(e.target.value))}
        min="1"
      />
      <br />
      <form id="userForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={form.age}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          value={form.address.street}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.address.city}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={form.address.state}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={form.address.zip}
          onChange={handleInputChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default BookContainer;
