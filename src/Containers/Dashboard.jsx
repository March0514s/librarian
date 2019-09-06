import React, { Fragment } from "react";

import CardWindow from "../Components/CardWindow";

//MUI
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMedkit } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const style = theme => ({
  root: {
    display: "flex",
    height: "100vh"
  },
  drawer: {
    width: "280px",
    hidden: 'true'
  },
  chartGroup: {
    "& p": {
      marginLeft: "20px",
      marginTop: "10px"
    },
    "& svg": {
      marginLeft: "10px"
    }
  },
  monthSelector: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    marginBottom: "15px"
  },
  chartSubgroup: {
    "& p": {
      marginLeft: "15px",
      marginTop: "10px",
      marginBottom: "10px"
    },
    "& svg": {
      marginLeft: "30px"
    }
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  },
  container: {
    marginLeft: '235px',
    marginTop: '20px'
  }
});

const GroupButton = withStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    paddingBottom: "10px"
  }
}))(Button);

const SubgroupButton = withStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-start"
  }
}))(Button);

function Dashboard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawer
        }}
        anchor="left"
      >
        <div className={classes.avatar}>
          <FontAwesomeIcon icon={faUserCircle} size="4x" />
        </div>
        <div className={classes.monthSelector}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          <Typography variant="h6">SET/2019</Typography>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </div>
        <Divider />
        <div className={classes.chartGroup}>
          <GroupButton fullWidth size="small">
            <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
            <Typography variant="body1">Income</Typography>
          </GroupButton>
          <div>
            <GroupButton fullWidth size="small">
              <FontAwesomeIcon icon={faFileInvoiceDollar} size="2x" />
              <Typography variant="body1">Expenses</Typography>
            </GroupButton>
            <div className={classes.chartSubgroup}>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faCoins} size="2x" />
                <Typography variant="body1">Financial</Typography>
              </SubgroupButton>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faHome} size="2x" />
                <Typography variant="body1">Housing</Typography>
              </SubgroupButton>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faMedkit} size="2x" />
                <Typography variant="body1">Health</Typography>
              </SubgroupButton>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faCar} size="2x" />
                <Typography variant="body1">Transport</Typography>
              </SubgroupButton>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faMale} size="2x" />
                <Typography variant="body1">Personal</Typography>
              </SubgroupButton>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faChild} size="2x" />
                <Typography variant="body1">Dependant</Typography>
              </SubgroupButton>
              <SubgroupButton fullWidth size="small">
                <FontAwesomeIcon icon={faPaw} size="2x" />
                <Typography variant="body1">Pet</Typography>
              </SubgroupButton>
            </div>
          </div>
          <GroupButton fullWidth size="small">
            <FontAwesomeIcon icon={faCamera} size="2x" />
            <Typography variant="body1">Capture</Typography>
          </GroupButton>
          <GroupButton fullWidth size="small">
            <FontAwesomeIcon icon={faReceipt} size="2x" />
            <Typography variant="body1">Process</Typography>
          </GroupButton>
        </div>
      </Drawer>
      <Container className={classes.container}>
        <CardWindow/>
      </Container>
    </div>
  );
}

export default withStyles(style)(Dashboard);
