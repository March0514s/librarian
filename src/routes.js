import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Dashboard from "./Containers/Dashboard";


const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    )
}

export default Routes;