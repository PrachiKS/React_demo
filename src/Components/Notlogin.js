import React from 'react'

const Notlogin = ({ loggedIn, setloggedIn }) => {
    return (
        <>
            {<h1>Please Login First</h1>}

            {<button onClick={() => { setloggedIn(!loggedIn); }}>Login</button>}
        </>
    )
}

export default Notlogin;