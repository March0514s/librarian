import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/styles'
import "./App.css";

import Home from "./Containers/Home";

const style = theme => ({
    root: {
        backgroundColor: 'whitesmoke',
        // zIndex: '-1',
        // position: 'relative'
    } 
})



function App(props) {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <Container maxWidth>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          {/* <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} /> */}
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default withStyles(style)(App);
