import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ContactLink extends Component {
    
    componentWillUnmount(){
        // console.log();
        alert("Contact Link is unmounting...")
    }


    render(){
        const link = this.props
        return (
            <li>
                <Link to={link.path}>{link.value}</Link>
            </li>
        )
    }
}
