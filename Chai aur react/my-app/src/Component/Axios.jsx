import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Axios() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setMyData(response.data.slice(0, 10));
        console.log(response.data);
      })
      .catch((error) => {
        setIsError(error.message);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
        {/* {console.log("kimmi")} */}
      {myData.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Axios;
