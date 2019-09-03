import React from "react";
import { Link } from "react-router-dom";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Checkbox } from '@material-ui/core'

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
    '& p': {
      marginTop: '10px'
    }
  },
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

function Login(props) {
  const { classes } = props;

  return (
    <Container className={classes.root}>
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
              //   className={}
              //   value={}
              //   onChange={}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Password"
              //   className={}
              //   value={}
              //   onChange={}
              margin="normal"
              variant="outlined"
            />
            <div className={classes.remember}>
              <Checkbox />
              <Typography variant="body1">Remember me</Typography>
            </div>
            <LoginButton variant="contained" color="primary" size="large">
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
    </Container>
  );
}

export default withStyles(style)(Login);
