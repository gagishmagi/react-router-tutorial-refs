import React from 'react'
import { Redirect, Route } from 'react-router'
import auth from '../lib/auth'

export default function ProtectedRoute({component:Component, ...rest}) {
    return (
            <Route {...rest} render={
                props => {
                  if(auth.isAuthenticated()){
                    return <Component {...props}/>
                  } else{
                      return <Redirect to={{
                          pathname: "/",
                          state: {
                              from: props.location
                          }
                      }} />
                  }
                     
                }} 
            />
    )
}
