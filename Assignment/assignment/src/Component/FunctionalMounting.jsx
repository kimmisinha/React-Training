import React, { useState, useEffect } from 'react'


function FunctionalMounting() {
    const [data, setdata] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age");
            const result = await response.json();
            setdata(result)
        };
        fetchData();
    }, []);
    return (
        <div>
            {data ? (
                <pre>{JSON.stringify(data, 1)}</pre>

            ) : (<p>Loading.....</p>)}
        </div>
    )
}
export default FunctionalMounting;