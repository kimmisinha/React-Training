import React, { Component, useState } from 'react'
function Profile() {
    const [loggedIn, setLoggedIn] = useState(1)
    return (
        <div >
            {loggedIn ?
                (<h1>welcome friend:</h1>
                ) :
                (<h>welcome guest</h>)
            }
        </div>
    );
}

export default Profile;