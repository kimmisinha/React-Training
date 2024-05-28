
import React, { forwardRef } from 'react';

const Childref = forwardRef(( ref) => {
    return (
         
        <>
            <input ref={ref} type="text" />
        </>
    );
});

export default Childref;
