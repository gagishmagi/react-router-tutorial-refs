import React, { Component } from 'react'
import auth from '../lib/auth'


export default class HomePage extends Component {
    render() {
        console.log(this.props.match)
    
        return (
            <div>
                <h1>Home page</h1>
                <button onClick={ 
                    () => auth.login(
                        () => this.props.history.push("/secret")
                    )
                } >Login</button>
            </div>
        )
    }
}
