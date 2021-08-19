import logo from '../logo.svg';
import "./Header.css";
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div style={ {backgroundColor: "lightblue" }}>
            <img  className="logo" src={logo} width="100"/>
            <nav>
            <ul>
              <li><NavLink exact activeStyle={{color:"red"}} style={{color:"blue"}} to="/">Home</NavLink></li>
              <li><NavLink activeStyle={{color:"green"}} style={{color:"blue"}} to="/contact">Contact Us</NavLink></li>
              <li><NavLink activeStyle={{color:"purple"}} style={{color:"blue"}} to="/about">About</NavLink></li>
            </ul>  
          </nav>
        </div>
    )
}
