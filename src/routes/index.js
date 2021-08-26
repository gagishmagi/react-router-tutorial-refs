import { BrowserRouter as Router, Link, NavLink, Redirect, Route, Switch, withRouter } from "react-router-dom"
import Contact from "../components/Contact"
import Header from "../components/Header"

import HomePage from '../components/HomePage'
import Page404 from "../components/Page404"
import ProtectedRoute from "../components/Protected"
import Secret from "../components/Secret"


const routes = function (){
    return (
        <Router>
            {/* <Link to={{
                pathname:"/contact",
                search:"?q=sadasdasda",
            }}>Home</Link> */}
            {/* <Link to="/contact" >Contact Us</Link>
            <NavLink exact style={{color:"blue"}} activeStyle={{color:"red"}} to="/">Home</NavLink>
            <NavLink style={{color:"blue"}} activeStyle={{color:"red"}} to="/home">Home</NavLink>
            <NavLink style={{color:"blue"}} activeStyle={{color:"red"}} to="/contact">Contact Us</NavLink>
            <NavLink style={{color:"blue"}} activeStyle={{color:"purple"}} to="/secret">Secret Page</NavLink>

            <a href="https://www.google.com" >Google</a> */}
            <Header/>
 
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/home" render={(props) => (
                <Redirect to="/"></Redirect>)} />
                <Route path="/contact" component={props => <Contact {...props}/>}/>
                <ProtectedRoute path="/secret" component={Secret}/>
                <Route component={Page404}/>
            </Switch>
            
        </Router>
    )
}


export default routes