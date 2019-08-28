import React, { Fragment, useState } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

//MUI
import Typography from '@material-ui/core/Typography';

const style = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        backgroundImage: 'linear-gradient(rgba(255,255,255, .8), rgba(255,255,255,.5)), url("https://www.islernw.com/wp-content/uploads/2017/10/isler_business_advisors_portland.jpg")',
        backgroundSize: 'cover',
        height: '70vh',
    '& div': {
        marginLeft: '100px',
        },
        "& h3": {
            marginBottom: '5px',
            color: 'rgb(206, 197, 70)',
            fontWeight: 'bold',
          },
          "& h6": {
            fontSize: '20px',
            marginBottom: '5px',
            width: '45vw'
          }
    }
});

const MainButton = withStyles(theme => ({
    root: {
      fontSize: '20px',  
      backgroundColor: 'rgb(206, 197, 70)',
      color: 'white',
      textTransform: 'none',
      marginTop: '15px',
      paddingLeft: '30px',
      paddingRight: '30px',
    //   position: 'absolute',
    //   left: '130px',
    //   top: '370px',
      "&:hover": {
        backgroundColor: "rgb(180, 187, 60)"
      }
    }
  }))(Button)

function Slideshow(props){
    const { classes } = props;
    const [mainText, setMainText] = useState('Your money at check');
    const [subtext, setSubText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptas. Odio assumenda sequi dolorum placeat porro perferendis. Dolorum, quae et commodi officiis sit eum aperiam ex? Possimus rerum illo debitis.');
    
    

    return (
        <Fragment >
            <Box className = {classes.root}>
                <div>
                    <Typography variant="h3">
                        {mainText}
                    </Typography>
                    <Typography variant="h6">
                        {subtext}
                    </Typography>
                    <MainButton variant="contained">Sign up Free</MainButton>
                </div>
            </Box>
        </Fragment>
    )
}

export default withStyles(style)(Slideshow)
