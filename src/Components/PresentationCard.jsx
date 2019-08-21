import React from 'react';

//MUI
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const style = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '380px'
    },
    outside: {
        marginTop: '50px',
    },
    inside: {
        display: 'flex',
        flexDirection: 'column',
    
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
        marginBottom: '15px',
        fontSize: '30px',
    },
},
});

function PresentationCard(props){
    const { classes } = props;

    return (
        <Container maxWidth className={classes.root}>
          <div className={classes.outside}>
          <Card elevation={9}>
            <CardContent className={classes.inside}>
              <div>
                <InsertChartIcon fontSize="large"/>      
              </div>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos velit veniam accusamus saepe dolore.</Typography>
            </CardContent>
          </Card>
          </div>
        </Container>
    )
}

export default withStyles(style)(PresentationCard);