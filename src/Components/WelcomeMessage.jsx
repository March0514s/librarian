import React from "react";

//MUI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

//This is a simple test

const style = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '97vh'
    },

    title: {
        fontweight: 'bold',
        color: 'lightgrey',
        fontSize: '36px',
    },

    subtitle: {
        fontweight: 'bold',
        color: 'lightgrey',
        fontSize: '22px'
    },
})


function WelcomeMessage(props){
    const { classes } = props
    return (
        <div className={classes.root}>
        <FontAwesomeIcon icon={faSmile} size='6x' color='lightgrey'/>
        <Typography className={classes.title} variant='h6'>
            welcome
        </Typography>
        <Typography className={classes.subtitle} variant='subtitle2'>
            Select a category on the left to begin.
        </Typography>
        </div>
    );
}

export default withStyles(style)(WelcomeMessage);