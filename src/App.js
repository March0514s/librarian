import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import "./App.css";

import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Dashboard from "./Containers/Dashboard";

const style = theme => ({
  root: {
    backgroundColor: "whitesmoke"
  }
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default withStyles(style)(App);
