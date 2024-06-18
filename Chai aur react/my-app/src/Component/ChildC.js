// import React from 'react';

// function ChildC({ nestedprop }) {
//   return (
//     <div>
//       {console.log("ChildC:", nestedprop)}
//       <p> Props passed in c:{nestedprop}</p>
//     </div>
//   );
// }

/* Problem: Prop drilling occurs when props have to be passed through multiple layers of 
components that do not directly use the props themselves. For example, if a top-level 
component has data that needs to be accessed deep down in the component tree, 
each intermediate component must pass these props down explicitly, even if they don't 
use them.
*

// export default ChildC;

// import React from 'react';
// import { DataContext } from '../App';

// function ChildC() {
//   return (
//     <div>
//       <DataContext.Consumer>
//         {({ name, rollno }) => (
//           <>
//             <h1>My name is {name}</h1>
//             <h2>My roll number is {rollno}</h2>
//           </>
//         )}
//       </DataContext.Consumer>
//     </div>
//   );
// }

// export default ChildC;


/* 
The Context API in React allows for easy global state management by providing a way 
to pass data through the component tree without using props explicitly at every level.
 However, it can lead to deeply nested provider and consumer components,
 making the code harder to read and maintain.
 */

import React from "react";
import { DataContext } from "../App";
import { useContext } from "react";
function ChildC() {
  const { name, rollno } = useContext(DataContext);

  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>My roll number is {rollno}</h2>
    </div>
  );
}

export default ChildC;


/*
Using useContext simplifies accessing context values by eliminating the need 
for nested Consumer components. This leads to cleaner, more readable code, especially 
in functional components.

*/




