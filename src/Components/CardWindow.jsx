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
  }
});

const RoundedTextField = withStyles(theme => ({
  root: {
    marginTop: "0px",
    marginBottom: "0px",
    "& input": {
      height: "0px"
    }
  },

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
                  R$
                </TableCell>
                <TableCell variant="h5" className={classes.headerText}>
                  %
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
                </TableCell>
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
                  <RoundedTextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="00.00"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                  />
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
