// import React from 'react'
// import ChildB from './ChildB'

// function ChildA({name}) {
//   return (
//     <div>
//         <ChildB name={name}/>
//         {console.log(name,"loo")}
//     </div>
//   )
// }

// export default ChildA

import React from 'react'
import ChildB from './ChildB'

function ChildA() {
  return (
    <div>
        <ChildB/>
    </div>
  )
}

export default ChildA;
