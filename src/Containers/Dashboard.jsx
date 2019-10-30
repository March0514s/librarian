import React, { useState, useEffect } from "react";
import firebase from "../Components/Firebase/Firebase";
import { Auth } from "../Context/authContext";
import { Redirect } from "react-router-dom";
import moment from "moment";

import CardWindow from "../Components/CardWindow";
import ModalTarget from "../Components/ModalTarget";
import WelcomeMessage from "../Components/WelcomeMessage";
import SettingsScreen from "./SettingsScreen";

//MUI
import { withStyles } from "@material-ui/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar, faCamera, faReceipt, faCoins, faHome, faMedkit,
  faCar, faMale, faChild, faPaw, faAngleLeft, faAngleRight, faPowerOff,
  faHandHoldingUsd, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";

const style = theme => ({
  root: {
    display: "flex",
    height: "100%"
  },
  drawer: {
    width: "280px",
    hidden: "true"
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
  smallAvatar: {
    width: 60,
    height: 60
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
      marginTop: "8px",
      marginBottom: "8px"
    },
    "& svg": {
      marginLeft: "30px"
    }
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px"
  },
  container: {
    marginLeft: "235px",
    marginTop: "20px"
  },
  powerOffButton: {
    position: "absolute",
    top: "5px",
    left: "165px"
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

const primary = "rgb(206, 197, 70)";

function Dashboard(props) {
  const { classes } = props;
  const [userState, setUserState] = useState(null);
  const [tableData, setTableData] = useState(null);
  const { state, dispatch } = React.useContext(Auth);

  useEffect(() => {
    firebase.getUserState().then(user => {
      if (user) {
        setUserState(user);
      }
    });
  }, []);

  useEffect(() => {
      (async () => {
        let table = await firebase.getTable(currentDoc);
        setTableData(table);
      })();
  }, );

  const logout = () => {
    firebase.logout();
    setUserState(null);
    props.history.replace("/login");
    return dispatch({
      type: "LOGOUT",
      payload: {}
    });
  };

  const [open, setOpen] = useState(null);

  const handleView = category => {
    setOpen(category);
  };

  const handleClose = category => {
    setOpen(null);
  };

  //TEMPORAL DATA
  //TODO: Put in an effect hook.
  //Compute distance between current month and user creation time;
  //Check if there's corresponding tables in the table collection, and create them if not;
  //Display only current month's tables and allow switching back and forth through the month selector;

  const regexHelper = (firebaseDate) => {

  const regex = /(\d{2})\s(\w{3})\s(\d{4})/g;
  return moment().diff(moment(`${regex.exec(firebaseDate)[0]}`, 'DDMMMYYYY'), 'months')
  
}

  const docList = (previousMonths) => {
    const monthStrings = [];
    const counterArray = [...Array(previousMonths + 1).keys()];
    
    counterArray.map(x => {
      monthStrings.unshift(moment().subtract(x, 'months').format('MMYYYY'));
    });
   
    return(monthStrings);

  }

  const genMissingDoc = docList => {
    docList.map( async month => {
      firebase.checkTable(month);
    })
  }

  let currentDoc = moment().format("MMYYYY");
  let currentMonth = moment().format("MMM/YYYY");
  let creationTime;
  firebase
    .getUserCreationTime()
    .then(resolve => (creationTime = resolve))
    .then(() => genMissingDoc(docList(regexHelper(creationTime))));

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
          <IconButton size="small" onClick={() => handleView("settings")}>
            <Avatar
              alt={state.user.name}
              src={
                state.user.photoURL
                  ? state.user.photoURL
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              className={classes.smallAvatar}
            />
          </IconButton>
          <IconButton
            className={classes.powerOffButton}
            aria-label="settings"
            size="small"
          >
            <FontAwesomeIcon icon={faPowerOff} onClick={() => logout()} />
          </IconButton>
        </div>
        <div className={classes.monthSelector}>
          <FontAwesomeIcon
            onClick={() => console.log("previous")}
            icon={faAngleLeft}
            size="2x"
            color={primary}
          />
          <Typography variant="h6">{currentMonth}</Typography>
          <FontAwesomeIcon
            onClick={() => console.log("next")}
            icon={faAngleRight}
            size="2x"
            color={primary}
          />
        </div>
        <Divider />
        <div className={classes.chartGroup}>
          <GroupButton
            fullWidth
            size="small"
            onClick={() => handleView("income")}
          >
            <FontAwesomeIcon
              icon={faHandHoldingUsd}
              size="2x"
              color={primary}
            />
            <Typography variant="body1">Income</Typography>
          </GroupButton>
          <div>
            <GroupButton
              fullWidth
              size="small"
              onClick={() => handleView("expenses")}
            >
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                size="2x"
                color={primary}
              />
              <Typography variant="body1">Expenses</Typography>
            </GroupButton>
            <div className={classes.chartSubgroup}>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("financial")}
              >
                <FontAwesomeIcon icon={faCoins} size="2x" color={primary} />
                <Typography variant="body1">Financial</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("housing")}
              >
                <FontAwesomeIcon icon={faHome} size="2x" color={primary} />
                <Typography variant="body1">Housing</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("health")}
              >
                <FontAwesomeIcon icon={faMedkit} size="2x" color={primary} />
                <Typography variant="body1">Health</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("transport")}
              >
                <FontAwesomeIcon icon={faCar} size="2x" color={primary} />
                <Typography variant="body1">Transport</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("personal")}
              >
                <FontAwesomeIcon icon={faMale} size="2x" color={primary} />
                <Typography variant="body1">Personal</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("dependant")}
              >
                <FontAwesomeIcon icon={faChild} size="2x" color={primary} />
                <Typography variant="body1">Dependant</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("pet")}
              >
                <FontAwesomeIcon icon={faPaw} size="2x" color={primary} />
                <Typography variant="body1">Pet</Typography>
              </SubgroupButton>
              <SubgroupButton
                fullWidth
                size="small"
                onClick={() => handleView("leisure")}
              >
                <FontAwesomeIcon
                  icon={faUmbrellaBeach}
                  size="2x"
                  color={primary}
                />
                <Typography variant="body1">Leisure</Typography>
              </SubgroupButton>
            </div>
          </div>
          <GroupButton disabled fullWidth size="small">
            <FontAwesomeIcon icon={faCamera} size="2x" color={primary} />
            <Typography variant="body1">Capture</Typography>
          </GroupButton>
          <GroupButton disabled fullWidth size="small">
            <FontAwesomeIcon icon={faReceipt} size="2x" color={primary} />
            <Typography variant="body1">Process</Typography>
          </GroupButton>
        </div>
      </Drawer>
      <Container className={classes.container}>
        {open === "income" && (
          <CardWindow table={tableData.incomeTable} icon={faHandHoldingUsd} close={handleClose} />
        )}
        {open === "financial" && (
          <CardWindow table={tableData.financialTable} icon={faCoins} close={handleClose} />
        )}
        {open === "housing" && (
          <CardWindow table={tableData.housingTable} icon={faHome} close={handleClose} />
        )}
        {open === "health" && (
          <CardWindow table={tableData.healthTable} icon={faMedkit} close={handleClose} />
        )}
        {open === "transport" && (
          <CardWindow table={tableData.transportTable} icon={faCar} close={handleClose} />
        )}
        {open === "personal" && (
          <CardWindow table={tableData.personalTable} icon={faMale} close={handleClose} />
        )}
        {open === "dependant" && (
          <CardWindow table={tableData.dependantTable} icon={faChild} close={handleClose} />
        )}
        {open === "pet" && <CardWindow table={tableData.petTable} icon={faPaw} close={handleClose} />}
        {open === "leisure" && (
          <CardWindow table={tableData.leisureTable} icon={faUmbrellaBeach} close={handleClose} />
        )}
        {open === "expenses" && (
          <div>
            <CardWindow table={tableData.financialTable} icon={faCoins}/>
            <CardWindow table={tableData.housingTable} icon={faHome}/>
            <CardWindow table={tableData.healthTable} icon={faMedkit}/>
            <CardWindow table={tableData.transportTable} icon={faCar}/>
            <CardWindow table={tableData.personalTable} icon={faMale}/>
            <CardWindow table={tableData.dependantTable} icon={faChild}/>
            <CardWindow table={tableData.petTable} icon={faPaw}/>
            <CardWindow table={tableData.leisureTable} icon={faUmbrellaBeach}/>
          </div>
        )}
        {open === null && <WelcomeMessage />}
        {open === "settings" && <SettingsScreen />}
      </Container>
    </div>
  );
}

export default withStyles(style)(Dashboard);
