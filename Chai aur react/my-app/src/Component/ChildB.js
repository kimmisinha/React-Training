// import React from 'react';
// import ChildC from './ChildC';

// function ChildB({ nestedprops }) {
//   return (
//     <div>
//       <ChildC nestedprop={nestedprops} />
//       {console.log("ChildB:", nestedprops)}
//     </div>
//   );
// }

// export default ChildB;


import React from 'react';
import ChildC from './ChildC';

function ChildB() {
  return (
    <div>
      <ChildC  />
    </div>
  );
}

export default ChildB;
