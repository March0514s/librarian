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
import CloseIcon from "@material-ui/icons/CloseOutlined";
import IconButton from "@material-ui/core/IconButton";
import ModalTarget from "./ModalTarget";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMedkit } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const style = theme => ({
  root: {
    width: "104%",
    marginBottom: "25px"
  },

  outside: {
    minHeight: "675px"
  },

  header: {
    backgroundColor: "#CEC546"
  },

  cell: {
    "&:last-child": {
      paddingLeft: "75px"
    },
    "& div": {
      justifyContent: "center",
      display: "flex",
      "& button": {
        opacity: 0,
        marginLeft: "10px",
        padding: "10px"
      },
      "& p": {
        marginTop: "8px"
      }
    }
  },

  row: {
    "&:hover": {
      backgroundColor: "whitesmoke"
    },
    "&:hover button": {
      opacity: 1
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
        marginRight: "10px"
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
        marginTop: "8px"
      }
    }
  }
});

const RoundedTextField = withStyles(theme => ({
  root: {
    margin: "0px",
    marginLeft: "90px",
    "& input": {
      height: "0px",
      textAlign: "right",
      backgroundColor: "white",
      borderRadius: "50px"
    },
    "& fieldset": {
      // backgroundColor: 'white', //<- NOT WORKING, hides the value of the text field.
      borderRadius: "50px",
      color: "black"
    }
  }
}))(TextField);

const PrimaryFab = withStyles(theme => ({
  root: {
    backgroundColor: "#CEC546",
    "&:hover": {
      backgroundColor: "rgb(180, 187, 60)"
    }
  }
}))(Fab);

function CardWindow(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false); //Modal state
  
  const close = (
    <IconButton aria-label="close" size="small" onClick={props.close}>
      <CloseIcon style={{ color: "white" }} fontSize="inherit" />
    </IconButton>
  );
  const edit = (
    <IconButton aria-label="edit" size="small">
      <FontAwesomeIcon icon={faPen} size="1x" color="#CEC546" />
    </IconButton>
  );
  const add = (
    <IconButton aria-label="add" size="small">
      <FontAwesomeIcon icon={faPlus} size="1x" color="#CEC546" />
    </IconButton>
  );
  const target = (
    <IconButton aria-label="target" size="small" onClick={() => setOpen(true)}> 
      <FontAwesomeIcon icon={faBullseye} size="1x" color="#CEC546" />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <Card elevation={3} className={classes.outside}>
        {props.close ? (
          <CardHeader action={close} className={classes.header}></CardHeader>
        ) : (
          <CardHeader className={classes.header}></CardHeader>
        )}
        <CardContent>
          <Table>
            <TableHead>
              {
                <TableRow>
                  <TableCell className={classes.firstHeaderCell}>
                    <div>
                      <FontAwesomeIcon icon={props.table.tableIcon} size="2x" />
                      <Typography variant="h5">
                        {props.table.tableName}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Typography variant="h6" align="center">
                      R$
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.headerCell}>
                    <Typography variant="h6" align="center">
                      %
                    </Typography>
                  </TableCell>
                </TableRow>
              }
            </TableHead>
            <TableBody>
              {/*Row*/}
              {props.table.tableRows.map(x => (
                <TableRow className={classes.row}>
                  <TableCell>
                    <Typography variant="body1">{x.name}</Typography>
                  </TableCell>
                  <TableCell className={classes.cell}>
                    <div>
                      <RoundedTextField
                        id="outlined-bare"
                        className={classes.textField}
                        defaultValue={x.value.toFixed(2)}
                        margin="normal"
                        variant="outlined"
                        inputProps={{ "aria-label": "bare" }}
                      />
                      {edit}
                      {add}
                    </div>
                  </TableCell>
                  <TableCell className={classes.cell}>
                    <div>
                      <Typography variant="body1" align="center">
                        00.00
                      </Typography>
                      {target}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <ModalTarget open={open} onClose={() => setOpen(false)}/>
    </div>
  );
}

export default withStyles(style)(CardWindow);
