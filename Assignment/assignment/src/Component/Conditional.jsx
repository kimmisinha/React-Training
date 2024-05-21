import React from 'react';
function Conditional() {
    let result = "true"

    return (
        <>
            {
                result ? (<h2>You are true</h2>) : (<h2>You are wrong</h2>)
            }
        </>

    )
}
export default Conditional;