import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Slideshow from '../Components/Slideshow'
import PresentationCard from '../Components/PresentationCard'
import { withStyles } from '@material-ui/styles'

const style = theme => ({
    topCards: {
        display: 'flex',
    } 
})


function Home(props) {
    const { classes } = props
        return (
            <div>
                <Navbar/>
                {/* Big presentation screen with signup*/}
                <Slideshow/>
                {/* Cards describing features */}
                <div className = {classes.topCards}>
                  <PresentationCard title='Budgeting the right way'/>
                  <PresentationCard title='Keep track of your expenses'/>
                  <PresentationCard title='Set your priorities'/>
                </div>
                {/* One bigger card and description of one feature */}
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
