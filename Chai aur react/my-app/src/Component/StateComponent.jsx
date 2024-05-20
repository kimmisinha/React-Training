import React from "react";
import { useState } from "react";

export default function StateComponent() {
    /*
        let counter = 15
        const addvalue = () => {
            counter = counter + 1;
            console.log(counter)
        }
    
        */

    const [set, setvalue] = useState(0)
    function addvalue() {
        setvalue(set + 1)
    }
    return (
        <>
            <h1>Chai aur react</h1>
            <h2>Counter value: {set}</h2>
            <button
                onClick={addvalue} >Add value</button>
            <br></br>
        </>
    )
}


