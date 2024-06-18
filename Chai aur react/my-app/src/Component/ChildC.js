// import React from 'react';

// function ChildC({ nestedprop }) {
//   return (
//     <div>
//       {console.log("ChildC:", nestedprop)}
//       <p> Props passed in c:{nestedprop}</p>
//     </div>
//   );
// }

// export default ChildC;


import React from 'react';
import { DataContext } from '../App';

function ChildC() {
  return (
    <div>
      <DataContext.Consumer>
        {(name) => {
          return <h1>My name is {name}</h1>;
        }}
      </DataContext.Consumer>
    </div>
  );
}

export default ChildC;


/* 
IN this code we can accept function you can pass mutiple variables for acess each variables you have 
create function it become nesting  */