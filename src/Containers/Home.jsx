import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Slideshow from '../Components/Slideshow'
import PresentationCard from '../Components/PresentationCard'
import { withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const style = theme => ({
    root: {
        backgroundColor: 'white',
    },
    topCards: {
        display: 'flex',
    },
    second: {
        display: 'flex',
    },
    secondText: {
        width: '2100px',
        '& h3': {
            color: 'rgb(206, 197, 70)',
        },
        '& h5': {
            marginTop: '30px',
            marginBottom: '20px',
            marginRight: '100px'
        },
        '& $bullet': {
            marginBottom: '20px',
        },
    },
});

const MainButton = withStyles(theme => ({
    root: {
      fontSize: '20px',  
      backgroundColor: 'white',
      color: 'gray',
      textTransform: 'none',
      marginTop: '30px',
      paddingLeft: '30px',
      paddingRight: '30px',
      "&:hover": {
        backgroundColor: "rgb(180, 187, 60)",
        color: 'white'
      }
    }
  }))(Button)


function Home(props) {
    const { classes } = props
        return (
            <div className={classes.root}>
                <Navbar/>
                {/* Big presentation screen with signup*/}
                <Slideshow/>
                {/* Cards describing features */}
                <div className = {classes.topCards}>
                  <PresentationCard title='Set your priorities'/>
                  <PresentationCard title='Track your expenses'/>
                  <PresentationCard title='Own your finances'/>
                </div>
                {/* One bigger card and description of one feature */}
                <div className = {classes.second}>
                  <PresentationCard title='cash cash cash'/>
                  <div className = {classes.secondText}>
                  <Typography variant='h3'>All your money in one place</Typography>
                  <Divider/>
                  <Typography variant='h5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor reprehenderit in sunt veniam earum, eum doloremque modi omnis consectetur necessitatibus nobis placeat numquam magni vitae dolorem doloribus vel. Suscipit saepe numquam culpa impedit maiores mollitia pariatur obcaecati maxime, ea excepturi, nam esse porro optio.</Typography>
                  <Typography variant='h6'>> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptates!</Typography>
                  <Typography variant='h6'>> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptates!</Typography>
                  <Typography variant='h6'>> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, voluptates!</Typography>
                  <MainButton variant="outlined">sign up, it's free.</MainButton>
                  </div>
                </div>
                {/* One bigger card and description of one feature */}
                {/* One bigger card and description of one feature */}
                {/* General description of the product */}
                {/* Cards describing what you can do with the software */}
                {/* Invitation to sign up */}
                {/* All links grouped */}
                {/* Sitemap and Social Media */}
                {/* Rights */}

            </div>
        )
}

export default withStyles(style)(Home);
