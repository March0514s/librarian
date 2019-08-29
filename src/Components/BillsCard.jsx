import React from "react";
import clsx from "clsx";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

const style = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "120px",
    width: '445px'
  },
  outside: {
    marginLeft: "25px",
    marginRight: "25px"
    
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(180deg, #9fb8ad, #1fc8db)",
    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },
  },

  header: {
    height: '30px',
  },
  
      
      avatar: {
        backgroundColor: '#9fb8ad',
      },

      title: {
        color: 'white',
        textTransform: 'uppercase',
        '& p': {
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
        }
      },

      subtitle: {
        marginTop: '20px',
        marginBottom: '50px',
        '& p': {
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white',
        }
      },

      icon: {
        marginLeft: '10px',
        marginTop: '20px',
        marginBottom: '20px',
      
      },
});

function BillsCard(props) {
  const { classes } = props;

  return (
    <div>
      <Container maxWidth className={classes.root}>
        <div className={classes.outside}>
          <Card elevation={9}>
            <CardHeader avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            L
            </Avatar>} title='Total Accounts' subheader='$165.821'className={classes.header}
            />
            <CardContent className={classes.inside}>
              <div>
              <Icon className={clsx(classes.icon, 'fas fa-envelope')}/>
              </div>
              <div className={classes.title}>
              <Typography variant="body1" align="center" >
                bills
              </Typography>
              </div>
              <div className={classes.subtitle}>
              <Typography variant="body1" align="center">
                You have $ 1,048 in bills due
              </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default withStyles(style)(BillsCard);
