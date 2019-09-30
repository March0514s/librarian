import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "../Components/Firebase/Firebase";
import { Auth } from "../Context/authContext";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core";

const style = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
    flexDirection: "column",
    "& h3": {},
    "& h6": {
      // color: "rgb(206, 197, 70)",
      fontSize: "26px"
    }
  },
  outside: {
    marginTop: "10px",
    height: "320px",
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
    justifyContent: "space-between",
    width: "300px",
    marginTop: "25px"
  },
  remember: {
    display: "flex",
    "& p": {
      marginTop: "10px"
    }
  }
});

const LoginButton = withStyles(theme => ({
  root: {
    fontWeight: "bold",
    marginTop: "10px",
    height: "50px",
    backgroundColor: "rgb(206, 197, 70)",
    "&:hover": {
      backgroundColor: "rgb(180, 187, 60)"
    }
  }
}))(Button);

const Login = props => {
  const { classes } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [routeRedirect, setRouteRedirect] = useState(false);

  const { state, dispatch } = React.useContext(Auth);

  const login = async e => {
    e.preventDefault();

    let response = await firebase.login(email, password);
    if(response.hasOwnProperty('message')){
      console.log(response.message);
    }
    else{
      console.log(response.user);
      setRouteRedirect(true);
      return dispatch({
        type: 'LOGIN',
        payload: response.user
      })
    }


  };

  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/dashboard" />;
  } 

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={login}>
        <Link to={"/"}>
          <Typography variant="h3">Librarian</Typography>
        </Link>
        <Typography variant="subtitle1">Please login to proceed.</Typography>
        <Card elevation={9} className={classes.outside}>
          <CardContent>
            <div className={classes.inside}>
              <TextField
                id="outlined-name"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
                type="password"
              />
              <div className={classes.remember}>
                <Checkbox />
                <Typography variant="body1">Remember me</Typography>
              </div>
              <LoginButton type="submit" variant="contained" color="primary" size="large">
                Login
              </LoginButton>
            </div>
          </CardContent>
        </Card>
        <div className={classes.supportLinks}>
          <Link to={"/signup"}>
            <Typography variant="body1">Sign Up</Typography>
          </Link>
          <Typography variant="body1">·</Typography>
          <Link to={"/forgot"}>
            <Typography variant="body1">Forgot Password</Typography>
          </Link>
          <Typography variant="body1">·</Typography>
          <Link to={"/help"}>
            <Typography variant="body1">Need Help?</Typography>
          </Link>
        </div>
      </form>
    </React.Fragment>
  );
};

export default withStyles(style)(Login);
