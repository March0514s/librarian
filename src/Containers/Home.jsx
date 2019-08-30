import React, { Component } from "react";
import { Link } from "react-router-dom";

import Slideshow from "../Components/Slideshow";
import PresentationCard from "../Components/PresentationCard";
import BillsCard from "../Components/BillsCard";

import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

//MUI
import Navbar from "../Components/Navbar";
import BalanceCard from "../Components/BalanceCard";
import LoginCard from "../Components/LoginCard";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const style = theme => ({
  root: {
    backgroundColor: "white",
    boxShadow: '0 0 1em silver',
  },
  topCards: {
    display: "flex",
    justifyContent: 'center',
    marginTop: '60px',
    marginBottom: '90px',
  },
  leftFeature: {
    display: "flex",
    justifyContent: 'center',
    marginBottom: '100px',
  },
  leftFeatureText: {
    "& h3": {
      width: "360px",
      color: "rgb(206, 197, 70)",
      fontWeight: 'bold'
    },
    "& h5": {
      width: "600px",
      marginTop: "30px",
      marginBottom: "20px",
      marginRight: "100px"
    }
  },
  rightFeature: {
    display: "flex",
    marginLeft: "100px",
    marginRight: "100px",
    justifyContent: 'center',
    marginBottom: '100px',
  },
  rightFeatureText: {
    "& h3": {
      width: "360px",
      color: "rgb(206, 197, 70)",
      fontWeight: 'bold'
    },
    "& h5": {
      width: "600px",
      marginTop: "30px",
      marginBottom: "20px",
      marginRight: "100px"
    },
  },

  generalDescription: {
    paddingBottom: "80px",
    "& h3": {
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    "& div": {
      marginLeft: '100px',
      marginRight: '100px',
      marginBottom: '40px',
    }
  },

  finalInvitation: {
    backgroundColor: '#2C3539',
    color: 'white',
    paddingBottom: "40px",
    paddingTop: "160px",
    "& h3": {
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    "& div": {
      marginLeft: '100px',
      marginRight: '100px',
      marginBottom: '40px',
    }
  },

  invitation: {
    marginTop: "50px",
    color: "rgb(206, 197, 70)",
    display: "flex",
    justifyContent: "center",
    "& button": {
      marginRight: "35px",
      marginBottom: "50px"
    }
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    textDecoration: "none"
  }
});

const MainButton = withStyles(theme => ({
  root: {
    fontSize: "20px",
    backgroundColor: "white",
    color: "gray",
    textTransform: "none",
    marginTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: "rgb(180, 187, 60)",
      color: "white"
    }
  }
}))(Button);

function Home(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
      <Navbar />
      {/* Big presentation screen with signup*/}
      <Slideshow />
      
      {/* Cards describing features */}
      <div className={classes.topCards}>
        <PresentationCard title="Set your priorities" icon={faBullseye} />
        <PresentationCard title="Track your expenses" icon={faChartBar}  />
        <PresentationCard title="Own your finances" icon={faCoins} />
      </div>
      {/* One bigger card and description of one feature */}
      <div className={classes.leftFeature}>
        <BalanceCard title="cash cash cash" />
        <div className={classes.leftFeatureText}>
          <Typography variant="h3">All your money in one place</Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor
            reprehenderit in sunt veniam earum, eum doloremque modi omnis.
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <MainButton variant="outlined">sign up, it's free.</MainButton>
        </div>
      </div>
      {/* One bigger card and description of one feature */}
      <div className={classes.rightFeature}>
        <div className={classes.rightFeatureText}>
          <Typography variant="h3">
            Effortlessly stay on top of bills
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor
            pariatur obcaecati maxime, ea excepturi, nam esse porro optio.
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <MainButton variant="outlined">sign up, it's free.</MainButton>
        </div>
        <BillsCard/>
      </div>
      {/* One bigger card and description of one feature */}
      <div className={classes.leftFeature}>
        <LoginCard/>
        <div className={classes.leftFeatureText}>
          <Typography variant="h3">We’re serious about security</Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor
            doloribus vel. Suscipit saepe numquam culpa impedit maiores mollitia
            pariatur obcaecati maxime, ea excepturi, nam esse porro optio.
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <Typography variant="h6">
            > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            voluptates!
          </Typography>
          <MainButton variant="outlined">sign up, it's free.</MainButton>
        </div>
      </div>
      {/* General description of the product */}
      <div className={classes.generalDescription}>
        <Typography variant="h3" align="center">
          Intuitive features, powerful results
        </Typography>
        <div>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            commodi. Ex dolor earum, laborum incidunt expedita sed quis facilis,
            qui libero dicta id? Tempore neque modi laborum eveniet ratione,
            reiciendis aspernatur optio molestiae, quisquam similique quidem
            saepe maiores, expedita deleniti!
          </Typography>
        </div>
        <Link to={"/"}>
          <Typography variant="body1" align="center">
            Learn More
          </Typography>
        </Link>
      </div>
      {/* Cards describing what you can do with the software */}
      <div className={classes.topCards}>
        <PresentationCard title="Budgets that work" image="https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <PresentationCard title="Money on the go" image="https://images.unsplash.com/photo-1497161884053-1d0d43fe3c61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"/>
        <PresentationCard title="One step at a time" image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
      </div>
      {/* Invitation to sign up */}
      <div className={classes.finalInvitation}>
        <Typography variant="h3" align="center">
          Sign up for Librarian today
        </Typography>
        <div>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            commodi. Ex dolor earum, laborum incidunt expedita sed quis facilis,
            commodi. Ex dolor earum, laborum incidunt expedita sed quis facilis,
            commodi. Ex dolor earum, laborum incidunt expedita sed quis facilis,
            commodi. Ex dolor earum, laborum incidunt expedita sed quis facilis,
            saepe maiores, expedita deleniti!
          </Typography>
        </div>
        <div className={classes.invitation}>
          <Button variant="outlined" color="inherit">
            Sign up
          </Button>
          <Button variant="outlined" color="inherit">
            Login
          </Button>
        </div>
      </div>
      {/* All links grouped */}
      {/* Sitemap and Social Media */}
      <Divider fullwidth />
      <div className={classes.links}>
        <Link to={"/"}>Sitemap</Link>
        <Typography>Socialmedia</Typography>
      </div>
      <Divider fullwidth />
      {/* Rights */}
      <Typography align="center">
        ©2019 Libra, Inc. All rights reserved.
      </Typography>
    </div>
  );
}

export default withStyles(style)(Home);
