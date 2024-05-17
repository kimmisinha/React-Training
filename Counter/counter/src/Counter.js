import React, { useState } from 'react';

function Toggle() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    console.log()
    const decrement = () => setCount(count - 1);
    const multiply = () => setCount(count * 2); 
    const divide = () => setCount(count / 2); 

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <button style={{ marginTop: '20px' }} type="button" className="btn btn-outline-primary" onClick={increment}>Increment Value</button>
            <br></br>
            <button style={{ marginTop: '20px' }} type="button" className="btn btn-outline-info" onClick={decrement}>Decrement Count</button>
            <br></br>
            <button style={{ marginTop: '20px' }} type="button" className="btn btn-outline-success" onClick={multiply}>Multiply Count by 2</button>
            <br></br>
            <button style={{ marginTop: '20px' }} type="button" className="btn btn-outline-warning" onClick={divide}>Divide Count by 2</button>
        </div>
    );
}

export default Toggle;
