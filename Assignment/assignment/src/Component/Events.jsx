import React from 'react';
function Events(){
    function handleclick(){
        alert ('hello')
    }
   return (
    <button onClick={handleclick}>Button</button>
  )
}
export default Events;