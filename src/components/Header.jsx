import logo from '../logo.svg';
import "./Header.css";
import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom';

function Header(props) {

    let q = '',value = ''

    const handleSearch = (e) => {
      e.preventDefault()

      q = e.target[0].name
      value = e.target[0].value

      props.history.push(`/contact?${q}=${value}`)

    }

    return (
      <div style={ {backgroundColor: "lightblue" }}>
            <img  className="logo" src={logo} width="100"/>
            <nav>
            <ul>
              <li><NavLink exact activeStyle={{color:"red"}} style={{color:"blue"}} to="/">Home</NavLink></li>
              <li><NavLink activeStyle={{color:"green"}} style={{color:"blue"}} to="/contact">Contact Us</NavLink></li>
              <li><NavLink activeStyle={{color:"purple"}} style={{color:"blue"}} to="/about">About</NavLink></li>
              <li><a href="https://www.google.com" >Google</a></li>
            </ul>
            <form onSubmit={handleSearch} action="/contact">
                <input type="text" name="q"/>
                <button>Search</button>
            </form>
          </nav>
        </div>
    )
}

export default withRouter(Header)