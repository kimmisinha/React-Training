import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('kimmi')
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

    }, []);

    return (
        <div>
            <p>Timer: {count}</p>
        </div>
    );
}

export default Timer;
