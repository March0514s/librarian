import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

const style = theme => ({
  root: {},
  titleIcon: {
      display: 'flex',
      justifyContent: 'center',
  },

  actionButtons: {
      display: 'flex',
      justifyContent: 'space-between', 
      color: 'rgb(206, 197, 70)'
  }
});

const ConfirmationButton = withStyles(theme => ({
    root: {
      backgroundColor: 'rgb(206, 197, 70)',
      color: 'white',
      textTransform: 'uppercase',
    "&:hover": {
        backgroundColor: "rgb(180, 187, 60)"
      }
    }
  }))(Button)

const RoundedTextField = withStyles(theme => ({
  root: {
    margin: "0px",
    display: "flex",
    justifyContent: "center",
    "& input": {
      height: "0px",
      textAlign: "center",
      backgroundColor: "white",
      borderRadius: "50px"
    },
    "& fieldset": {
      borderRadius: "50px",
      color: "black"
    }
  }
}))(TextField);

const primary = 'rgb(206, 197, 70)'

function ModalTarget(props) {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   console.log('handleClikOpen');
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form Dialog
      </Button> */}
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
            <div className={classes.titleIcon}>
          <FontAwesomeIcon icon={faBullseye} size="3x" color="#CEC546" />
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Would you like to set a goal?</DialogContentText>
          <div className="text-field-div">
            <RoundedTextField
              id="outlined-bare"
              className={classes.textField}
              defaultValue="0%"
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
            />
          </div>
        </DialogContent>
        <DialogActions className={classes.actionButtons}>
          <Button onClick={props.onClose} variant="outlined" color="inherit">
            Cancel
          </Button>
          <ConfirmationButton onClick={props.onClose} variant="contained" color="inherit">
            Set
          </ConfirmationButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(style)(ModalTarget);
