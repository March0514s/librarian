import React from "react";

//MUI
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";


const style = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "97vh",
    '& h6': {
        marginBottom: '20px',
        textTransform: 'uppercase',
        color: "#CEC546"
    }
  },

  settings: {
    display: "flex"
    // height: "97vh"
  },
  bigAvatar: {
    marginLeft: 10,
    marginRight: 40,
    marginTop: 25,
    marginBottom: 20,
    width: 200,
    height: 200
  },
  formSettings: {
    display: "flex",
    flexDirection: "column",
    
    width: "60vw",
    "& div": {
    //   marginBottom: "10px",
    }
  },

  firstHeaderCell: {
    color: "#CEC546",
    "& div": {
      display: "flex",
      "& button": {
        opacity: 1,
        marginLeft: "10px",
        padding: "10px"
      },
      "& p": {
        marginTop: "8px"
      },
      "& svg": {
        marginRight: "10px",
        marginTop: "13px"
      }
    }
  },

  headerCell: {
    color: "#CEC546",
    "& div": {
      display: "flex",
      "& button": {
        opacity: 1,
        marginLeft: "10px",
        padding: "10px"
      },
      "& p": {
        marginTop: "20px"
      }
    }
  },

  editButton: {
    position: 'absolute',
    top: '260px',
    left: '490px'
  },

  save: {
      display:'flex',
      justifyContent: 'flex-end'
  },

  checklist: { 
      display: 'flex',
      marginTop: '20px',
      marginBottom: '60px',

      '& p': {
          marginTop: '10px'
      }
  }

});

const SaveButton = withStyles(theme => ({
    root: {
      backgroundColor: 'rgb(206, 197, 70)',
      color: 'white',
      textTransform: 'uppercase',
      marginTop: '20px',
      paddingLeft: '40px',
      paddingRight: '40px',
      "&:hover": {
        backgroundColor: "rgb(180, 187, 60)"
      }
    }
  }))(Button)

function SettingsScreen(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
        <Typography variant='h6' align="center">Control Panel</Typography>
        {/* <Divider /> */}
      <div className={classes.settings}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          className={classes.bigAvatar}
        />
        <IconButton className={classes.editButton}aria-label="edit" size="small">
        <FontAwesomeIcon icon={faPen}/>
        </IconButton>
        <div className={classes.formSettings}>
          <div>
            <Typography variant="overline">Your Name</Typography>
            <TextField
              id="outlined-name"
              //   label="Password"
              //   className={}
              value={"Username"}
              //   onChange={}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <Typography variant="overline">Email</Typography>
            <TextField
              id="outlined-email"
              //   label="Password"
              //   className={}
              value={"user@email.com"}
              //   onChange={}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div></div>
        </div>
      </div>
      {/* <Divider /> */}
      <div className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.firstHeaderCell}>
                  <div>
                  <FontAwesomeIcon icon={faDollarSign}/>
                  <Typography variant='body1'>Resume</Typography>
                  </div>
              </TableCell>
              <TableCell variant='body1' className={classes.firstHeaderCell}>R$</TableCell>
              <TableCell variant='body1' className={classes.firstHeaderCell}>%</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Total Earnings</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>00.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Total Expenses</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>00.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Balance</TableCell>
              <TableCell>0.00</TableCell>
              <TableCell>00.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </div>
        <div className={classes.checklist}>
        <Checkbox></Checkbox>
        <Typography variant='body1'>
            Allow Email notifications.
        </Typography>
        </div>
        <div className={classes.save}>
        <SaveButton>save</SaveButton>
      </div>
    </div>
  );
}

export default withStyles(style)(SettingsScreen);
