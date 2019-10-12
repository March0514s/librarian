import React, { Component } from 'react';
import { Switch, Route, Redirect, } from 'react-router-dom';
import firebase from './Components/Firebase/Firebase'; //?


//Components
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Dashboard from "./Containers/Dashboard";

let userState = null; //?

firebase.getUserState().then(user => userState = user); //?

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props => userState ?  (<Component {...props}/>) : (<Redirect to={{pathname: '/login'}}/>)} 
    />
)

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
    )
}



export default Routes;