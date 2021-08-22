import React from 'react'
import auth from '../lib/auth'

export default function Secret(props) {
    return (
        <div>
            <h1>Secret page!!! shshsh!!!</h1>
            <button onClick={ 
                    () => auth.logout(
                        () => props.history.push("/")
                    )
                } >Logout</button>
        </div>
    )
}
