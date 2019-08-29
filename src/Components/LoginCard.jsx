import React from "react";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import KeyIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import SecurityIcon from "@material-ui/icons/SecurityTwoTone";

const style = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    // marginBottom: "120px",
    // backgroundColor: 'black'
},

outside: {
    width: "320px",
    marginLeft: '30px',
    marginRight: '100px',
    position: 'relative',
    top: '-90px'
  },

  inside: {
    display: "flex",
    flexDirection: "column",
    marginTop: "80px",
    marginBottom: "15px",
    marginLeft: "20px",
    marginRight: "20px"
  },

  avatar: {
      height: '150px',
      width: '150px',
      marginLeft: '89px',
      position:'relative',
      top: '75px'
  }
});

const FakeButton = withStyles(theme => ({
  root: {
    marginTop: "15px",
    height: "60px"
  }
}))(Button);

function LoginCard(props) {
  const { classes } = props;

  return (
    <div>
      <Container maxWidth className={classes.root}>
        <div className={classes.outside}>
              <Avatar className={classes.avatar}>
                  <div>
                  <SecurityIcon fontSize='large'/>
                  </div>
              </Avatar>
          <Card elevation={9}>
            <CardContent className={classes.inside}>
              <TextField
                id="outlined-full-width"
                placeholder="Email or user ID"
                fullWidth
                margin="normal"
                variant="outlined"
                disabled
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="outlined-full-width"
                placeholder="********"
                fullWidth
                margin="normal"
                variant="outlined"
                disabled
                InputLabelProps={{
                  shrink: true
                }}
              />
              <FakeButton variant="contained" color="primary" size="large">
                <KeyIcon />
              </FakeButton>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(style)(LoginCard);
