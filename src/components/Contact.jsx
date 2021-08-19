import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Contact extends Component {
    render() {
        return (
            <div>
                 <h1>Contact Us</h1>

                 <strong>Select contact from list</strong>
                 
                 <ul>
                     <li>
                         <Link to="/contact/1">Contact 1</Link>
                     </li>
                     <li>
                         <Link to="/contact/2">Contact 2</Link>
                     </li>
                     <li>
                         <Link to="/contact/3">Contact 3</Link>
                     </li>
                     <li>
                         <Link to="/contact/4">Contact 4</Link>
                     </li>
                 </ul>

            </div>
        )
    }
}
