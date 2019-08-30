import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { fontWeight } from "@material-ui/system";
import Avatar from '@material-ui/core/Avatar';

const style = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  outside: {
    borderRadius: "100%",
    width: "300px",
    // marginLeft: "50px",
    marginRight: "100px"
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(180deg, #9fb8ad, #1fc8db)",

  },
  header: {
    height: '30px',
  },

  topText: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    '& p': {
      display:'flex',
      justifyContent: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      marginTop: '10px'
    },
    '& h3': {
      display:'flex',
      justifyContent: 'center',
      fontWeight: 'bold',
      marginTop: '10px'
    },
  },
      lowerText: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        '& div': {
          marginTop: '15px',
          marginBottom: '15px',
          justifyContent: 'center'
        },
        '& p': {
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '18px'
        },
      },
      
      avatar: {
        backgroundColor: '#9fb8ad',
      },
});

function BalanceCard(props) {
  const { classes } = props;

  return (
    <div>
      <Container maxWidth className={classes.root}>
        <div className={classes.outside}>
          <Card elevation={9}>
            <CardHeader avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            L
            </Avatar>} title='Total Accounts' subheader='$165.821'className={classes.header}/>
            <CardContent className={classes.inside}>
              <div className={classes.topText}>
              <Typography variant="body1">All Accounts</Typography>
              <Typography variant="h3">$165,821</Typography>
              </div>
              <div className={classes.lowerText}>
                <div>
                <Typography variant="body2">
                  <span>Cash</span>
                  <span>$5,282</span>
                </Typography>
                </div>
                <Divider light/>
                <div>
                <Typography variant="body2">
                  <span>Credit Debt</span>
                  <span>-$2,129</span>
                </Typography>
                </div>
                <Divider light/>
                <div>
                <Typography variant="body2">
                  <span>Investments</span>
                  <span>$52,567</span>
                </Typography>
                </div>
                <Divider light/>
                <div>
                <Typography variant="body2">
                  <span>Budget</span>
                  <span>$1,050</span>
                </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(style)(BalanceCard);
