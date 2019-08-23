import React from 'react';

//MUI
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon'
import clsx from 'clsx';

const style = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom: '80px',
        // height: '490px'
    },
    outside: {
        marginTop: '50px',
        borderRadius: '100%',
        width: '400px'
    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '350px',
        marginLeft: '25px',
        marginRight: '25px',
    
    '& div': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        marginBottom: '50px'
    },
    '& h6': {
        color: 'rgb(206, 197, 70)',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '5px',
        fontSize: '30px',
    },
    icon: {
      },
},
});

function PresentationCard(props){
    const { classes } = props;

    return (
        <Container maxWidth className={classes.root}>
          <div className={classes.outside}>
          <Card elevation={2}>
            <CardContent className={classes.inside}>
              <div>
                  <Icon className={clsx(classes.icon, 'fa fa-plus-circle')} />
              </div>
                <Typography variant="h6">{props.title}</Typography>
                <Divider/>
                <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos velit veniam accusamus saepe dolore.</Typography>
            </CardContent>
          </Card>
          </div>
        </Container>
    )
}

export default withStyles(style)(PresentationCard);