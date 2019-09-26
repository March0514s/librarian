import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../Components/Firebase/Firebase";
import { Auth } from "../Context/authContext";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const style = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
    "& h3": {},
    "& h6": {
      fontSize: "26px"
    }
  },
  outside: {
    marginTop: "10px",
    height: "445px",
    width: "350px"
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "5px"
  },
  supportLinks: {
    display: "flex",
    justifyContent: "center",
    width: "300px",
    marginTop: "25px"
  }
});

const LoginButton = withStyles(theme => ({
  root: {
    fontWeight: "bold",
    marginTop: "15px",
    height: "50px",
    backgroundColor: "rgb(206, 197, 70)",
    "&:hover": {
      backgroundColor: "rgb(180, 187, 60)"
    }
  }
}))(Button);

const Signup = props => {
  const { classes } = props;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const { state, dispatch } = React.useContext(Auth);

  const signup = async e => {
    e.preventDefault();

    let response = await firebase.signin(email, password);
    if (response.hasOwnProperty("message")) {
      console.log(response.message);
    } else {
      console.log(response.user);
      return dispatch({
        type: "SIGNUP",
        payload: response
      });
    }
  };

  return (
    <Container className={classes.root}>
      <form onSubmit={signup}>
        <Typography variant="subtitle1">Welcome to</Typography>
        <Link to={"/"}>
          <Typography variant="h3">Librarian</Typography>
        </Link>
        <Card elevation={9} className={classes.outside}>
          <CardContent>
            <div className={classes.inside}>
              <TextField
                id="outlined-name"
                label="Name"
                //   className={}
                //   value={}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Email"
                //   className={}
                //   value={}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Password"
                //   className={}
                //   value={}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Confirm Password"
                //   className={}
                //   value={}
                onChange={(e) => setConfirmationPassword(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <LoginButton type="submit" variant="contained" color="primary" size="large">
                Signup
              </LoginButton>
            </div>
          </CardContent>
        </Card>
        <div className={classes.supportLinks}>
          <Link to={"/login"}>
            <Typography variant="body1">Already a member? </Typography>
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default withStyles(style)(Signup);
