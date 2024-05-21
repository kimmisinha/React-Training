import React, { useState, useEffect } from 'react'
function FunctionalMounting({ name }) {
    const [data, setdata] = useState(null);

    const [content, setContent] = useState(<p>Loading.....</p>);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age");
            const result = await response.json();
            setdata(result)
            console.log("hello")
        };

        fetchData();
        console.log("hello2")
    }, []);

    useEffect(() => {
        if (data) {

            setContent(<pre>{JSON.stringify(data, 1)}</pre>)
        }
    }, [data])
    return (
        <div>
            {console.log("kimmi")}
            {content}
            <div>{name}</div>

        </div>
    )
}
export default FunctionalMounting;