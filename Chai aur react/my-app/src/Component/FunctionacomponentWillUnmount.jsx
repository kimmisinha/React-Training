// import React, { useEffect, useState } from "react";

// function FunctionacomponentWillUnmount() {
//   let [count, setCount] = useState(0);
// //   handleChange(() => {
// //     setCount(count + 1);
// //   });
// //   useEffect(() => {
// //     console.log("Component mounted or updated")
// //     return ()=>{
// //         console.log("Component will Unmount or Updated")
// //     }
// //   }, []);
//   return (
//     <div>
//         <h1>count:{count}</h1>
//       <button onClick={handleChange}>FunctionacomponentWillUnmount</button>
//     </div>
//   );
// }

// export default FunctionacomponentWillUnmount;

// /*

// In functional components, you can achieve the equivalent of componentWillUnmount
//  using the useEffect hook. The useEffect hook can return a cleanup function that 
//  acts like componentWillUnmount. This cleanup function is executed when the component 
//  is unmounted or before the effect is re-run if the dependencies have changed.

// */
