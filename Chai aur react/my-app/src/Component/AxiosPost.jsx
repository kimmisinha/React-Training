import React from "react";
import { useState } from "react";
import axios from "axios";

function AxiosPost() {
  const [inputData, setInputData] = useState({ firstName: "", lastName: "" });

  const handleChangeinputA = (event) => {
    setInputData((prev) => ({ ...prev, firstName: event.target.value }));
  };
  const handleChangeinputB = (event) => {
    setInputData((prev) => ({ ...prev, lastName: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", inputData)
      .then((response) => {
        console.log(response);
      });
  };
  const handleSubmitUsingPut =(e)=>{
    e.preventDefault();
   axios
   .put("https://jsonplaceholder.typicode.com/users",inputData)
   .then((respose)=>{
    console.log(respose)
   })
  }
  const handleSubmitUsingFetch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      console.log("res", res);
      let data = await res.json();
      setInputData(data);
    } catch (error) {
      console.error("Error:", error);
      setInputData(error.message);
    }
  };
  return (
    <>
      <label>First name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={inputData.fname}
        onChange={handleChangeinputA}
      />
      <label>last name</label>
      <input
        type="text"
        id="fname"
        name="lname"
        value={inputData.lname}
        onChange={handleChangeinputB}
      />
      <button onClick={handleSubmit}>Submit with Axios</button>
      <button onClick={handleSubmitUsingPut}>Submit with Axios with putMethod </button>
      <button onClick={handleSubmitUsingFetch}>Submit with fetch</button>
    </>
  );
}

export default AxiosPost;
