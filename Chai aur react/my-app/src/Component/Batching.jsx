import React, { useState } from 'react';
function Batching() {
  let [count, setcount] = useState(0);
  const [text, setext] = useState(0);

  function handleclick() {
    setcount(count + 1);
    console.log(count);
    setext(text + 1);
    // React batches the above two state updates into a single update

  }
  return (
    <div>

      <button onClick={handleclick}>Button</button>
      <p>count:{count}</p>
      <p>text:{text}</p>
    </div>


  )
}
export default Batching;

/*
React automatically batches multiple state updates into a single update
for performance optimization, even in functional components.
*/