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

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { borderRadius } from "@material-ui/system";

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
    fontweight: "bold"
  },
  buttons: {
    '& svg': {
      marginLeft:  '20px',
      marginRight:  '5px',
      marginTop:  '12px'
    }
  },

  // cell: {
  //   display: 'flex'
  // }
});

const RoundedTextField = withStyles(theme => ({
  root: {
    marginTop: "0px",
    marginBottom: "0px",
    display: "flex",
    justifyContent: "center",
    width: "200px",
    marginLeft: "275px",
    "& input": {
      height: "0px",
      borderRadius: '50px' //<THIS IS NOT WORKING
    }
  }
}))(TextField);

function CardWindow(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.outside}>
        <CardHeader className={classes.header}></CardHeader>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className={classes.tableHeader}>
                    <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
                    <Typography variant="h5">Income</Typography>
                  </div>
                </TableCell>
                <TableCell variant="h5" className={classes.headerText}>
                  <Typography align="center">R$</Typography>
                </TableCell>
                <TableCell variant="h5" className={classes.headerText}>
                  <Typography align="center">%</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Salário</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                  <div className={classes.buttons}>
                    <FontAwesomeIcon icon={faPen} size="1x" />
                    <FontAwesomeIcon icon={faPlus} size="1x" />
                  </div>
                </TableCell >
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                  <FontAwesomeIcon icon={faBullseye} size="1x" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13º Salário</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Férias</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Aluguéis</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Resgate</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Renda Extra</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Empréstimos</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Outros</TableCell>
                <TableCell>
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1" align="center">
                    00.00
                  </Typography>
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
