import React from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import "./App.css";

import Routes from './routes';


const style = theme => ({
  root: {
    backgroundColor: "whitesmoke"
  }
});

const App = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth>
        <Routes/>
      </Container>
    </div>
  );
}

export default withStyles(style)(App);
