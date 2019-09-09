import React from "react";

//MUI
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/CloseOutlined"
import IconButton from "@material-ui/core/IconButton"

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const style = theme => ({
  root: {
    display: "flex"
  },

  header: {
    backgroundColor: "#CEC546"
  },

  outside: {
    width: "1205px",
    height: "680px"
  },

  tableHeader: {
    display: "flex",
    "& h5": {
      marginLeft: "10px",
      color: "#CEC546",
      fontweight: "bold"
    },
    "& svg": {
      color: "#CEC546"
    }
  },

  headerText: {
    color: "#CEC546",
    fontSize: "21px",
    fontweight: "bold",
    width: "200px"
  },
  buttons: {
    '& svg': {
      // opacity: 0,
      // marginLeft:  '20px',
      // marginRight:  '5px',
      // marginTop:  '12px'
    },
    '& button': {
      opacity: 0,
      marginLeft:  '10px',
      // marginRight:  '5px',
      marginTop:  '-3px'
    }
  },

  percent: {
    display: 'flex', 
    marginLeft: '190px',
    marginTop: '6px', 
    '& svg': {
      // marginLeft: '20px'
    },
    '& button': {
      opacity: 0,
      marginLeft: '10px',
      marginTop: '-8px'
    },
  },
  
  target: {
    marginTop: '2px',
    // opacity: 0
  },

  row: {
    '&:hover': {
    backgroundColor: 'whitesmoke'
  },
    '&:hover button': {
      opacity: 1
    }
  }

});

const RoundedTextField = withStyles(theme => ({
  root: {
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: '100px',
    "& input": {
      height: "0px",
      textAlign: 'right',
    },
    "& fieldset": {
      // backgroundColor: 'white' <- NOT WORKING, hides the value of the text field.
      borderRadius: "50px",
      color: 'black'
    },
  }
  
}))(TextField);

const PrimaryFab = withStyles(theme => ({
  root: {
    backgroundColor: '#CEC546',
    '&:hover': {
      backgroundColor: 'rgb(180, 187, 60)'
    }
    },
  
}))(Fab);

const close = 
<IconButton aria-label="delete" size="small" >
<CloseIcon style={{color: 'white'}}fontSize="inherit"/>
</IconButton>

function CardWindow(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.outside}>
        <CardHeader action={close} className={classes.header}></CardHeader>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{width: '100px'}}>
                  <div className={classes.tableHeader}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
                    <Typography variant="h5">Income</Typography>
                  </div>
                </TableCell>
                <TableCell  className={classes.headerText}>
                  <Typography variant="h6" align="center">R$</Typography>
                </TableCell>
                <TableCell  className={classes.headerText}>
                  <Typography variant="h6" align="center">%</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*Row*/}
              {/*Salário*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Salário</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*13 Salário*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>13º Salário</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*Férias*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Férias</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*Aluguéis*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Aluguéis</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*Resgate*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Resgate</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*Renda Extra*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Renda Extra</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*Empréstimos*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Empréstimos</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
              {/*Outros*/}
              <TableRow className={classes.row}>
                <TableCell className={classes.tableCell}>Outros</TableCell>
                <TableCell>
                <div className={classes.buttons}>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPen} size="1x"  color="white"/></PrimaryFab> 
                    <PrimaryFab size='small'><FontAwesomeIcon icon={faPlus} size="1x" color="white"/></PrimaryFab>
                  </div>
                </TableCell >
                <TableCell >
                  <div className={classes.percent}>
                  <Typography variant="body1" align="center" >
                    00.00
                  </Typography>
                  <PrimaryFab size='small'>
                  <FontAwesomeIcon icon={faBullseye} size="2x" className={classes.target} color="white" />
                  </PrimaryFab>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(style)(CardWindow);
