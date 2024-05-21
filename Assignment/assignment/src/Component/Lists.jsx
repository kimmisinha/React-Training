import React from 'react';
function List() {
    const items = ['apple', 'mango', 'orange']
    return (
        <>
            {items.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </>

    )
}
export default List;