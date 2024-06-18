import React from 'react';

function ChildC({ nestedprop }) {
  return (
    <div>
      {console.log("ChildC:", nestedprop)}
      <p> Props passed in c:{nestedprop}</p>
    </div>
  );
}

export default ChildC;
