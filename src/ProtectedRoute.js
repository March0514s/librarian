import React, { useEffect, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "./Components/Firebase/Firebase";

let userState = null;

firebase.getUserState().then(user => {
  if (user) {
    userState = user;
  }}
);

const ProtectedRoute = ({ components: Components, ...rest }) => {

  return ( <Route 
  {...rest}
  render={props => userState !== null ? (<Component {...props}/>) : (<Redirect to={{pathname: '/login'}}/>)} 
  /> );
};

export default ProtectedRoute;