import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'


export default class Contact extends Component {

    constructor(props){
        super(props)
        this.state = {
            q: ""
        }
    }


    componentDidMount(){
        this.searchContact()
    }


    searchContact(){
        console.log(this.props)
        if(this.props.location.search){
            let url = this.props.location.search
            let parsed = queryString.parse(url)
            let q = parsed.q

            this.setState({q})
        }
    }

    render() {
        return (
            <div>
                 <h1>Contact Us</h1>

                 You searched for: {this.state.q}
                 
                 <br/>

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
