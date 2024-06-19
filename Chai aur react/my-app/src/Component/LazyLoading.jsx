import React from "react";

const dummy = 
// [
  { id: 1, name: "menu", description: "This is the menu." }
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
//   { id: 1, name: "menu", description: "This is the menu." },
//   { id: 2, name: "rohit", description: "This is the rohit." },
//   { id: 3, name: "rahul", description: "This is the rahul." },
// ];

function LazyLoading() {
  // if (dummy.length > 0) {
  //   throw new Error("An error has occurred in LazyLoading component!");
  // }

  return (
    <div>
      {dummy.map((ele) => (
        <div
          key={ele.id}
          style={{ margin: "3px", padding: "0px", border: "1px solid black" }}
        >
          <h3>{ele.name}</h3>
          <p>{ele.description}</p>
        </div>
      ))}
    </div>
  );
}

export default LazyLoading;
