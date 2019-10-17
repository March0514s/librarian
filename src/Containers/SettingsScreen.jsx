import React, { useContext } from "react";
import { Auth } from "../Context/authContext";
import firebase from '../Components/Firebase/Firebase';
import moment from 'moment';

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
import Checkbox from "@material-ui/core/Checkbox";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const style = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "97vh",
    "& h6": {
      marginBottom: "20px",
      textTransform: "uppercase",
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
    position: "absolute",
    top: "260px",
    left: "490px"
  },

  save: {
    display: "flex",
    justifyContent: "flex-end"
  },

  checklist: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "60px",

    "& p": {
      marginTop: "10px"
    }
  }
});

const SaveButton = withStyles(theme => ({
  root: {
    backgroundColor: "rgb(206, 197, 70)",
    color: "white",
    textTransform: "uppercase",
    paddingLeft: "40px",
    paddingRight: "40px",
    "&:hover": {
      backgroundColor: "rgb(180, 187, 60)"
    }
  }
}))(Button);

function SettingsScreen(props) {
  const { classes } = props;
  const { state } = useContext(Auth);

  //Profile State
  const [profileChanged, setProfileChanged] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [avatar, setAvatar] = React.useState(null);
  const [emailNotifications, toggleEmailNotifications] = React.useState(true);
  
  const [values, setValues] = React.useState({
    displayName: '',
    photoURL: '',
    email: '',
  });


  //Update profile
  const handleSubmit = e => {
    e.preventDefault();

    state.user
      .updateProfile({
        displayName: userName,
        photoURL: avatar
      })
      .then(() => !profileChanged)
      .catch(err => console.log(err));

    state.user
      .updateEmail(email)
      .then(() => !profileChanged)
      .catch(err => console.log(err));
  };

  const handleImageChange = e => {
   const date = moment().format("YYYYMMDD-HHMMSS");
   const image = e.target.files[0];
   const store = firebase.storage.ref();
   const imageExtension = `.${e.target.files[0].name.split('.').pop()}`
   const imageName = `user-images/${state.user.uid}/${date}${imageExtension}`;
   const userPhoto = store.child(imageName).put(image)
   .then( snapshot => {
     console.log('snapshot.name: ', snapshot);
     console.log('snapshot.name: ', snapshot.metadata.fullPath);
     firebase.updateProfilePicture(snapshot.metadata.fullPath)
     .then(() => !profileChanged)
     .then(fullURL => {
       const oldImage = values.photoURL.split('./o/').pop().split('?')[0].replace(/%2F/g,'/');
       if (oldImage !== 'user-images/no-img.png'){
         store.child(oldImage).delete();
       }
       setValues({...values, photoURL: fullURL});
     })
   })
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Typography variant="h6" align="center">
        Control Panel
      </Typography>
      {/* <Divider /> */}
      <div className={classes.settings}>
        <Avatar
          alt={state.user.displayName}
          src={state.user.photoURL ? state.user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }
          className={classes.bigAvatar}
        />
        <IconButton
          onClick={handleEditPicture}
          className={classes.editButton}
          aria-label="edit"
          size="small"
        >
        <input
          type="file"
          id="imageInput"
          hidden="hidden"
          onChange={handleImageChange}
        />
          <FontAwesomeIcon icon={faPen} />
        </IconButton>
        <div className={classes.formSettings}>
          <div>
            <Typography variant="overline">Your Name</Typography>
            <TextField
              placeholder={
                state.user.displayName ? state.user.displayName : "Full Name"
              }
              onChange={e => {
                setProfileChanged(true);
                console.log("profileChanged");
                setUserName(e.target.value);
              }}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </div>
          <div>
            <Typography variant="overline">Email</Typography>
            <TextField
              placeholder={state.user.email}
              onChange={e => {
                setProfileChanged(true);
                setEmail(e.target.value);
              }}
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
                  <FontAwesomeIcon icon={faDollarSign} />
                  <Typography variant="body1">Resume</Typography>
                </div>
              </TableCell>
              <TableCell variant="body1" className={classes.firstHeaderCell}>
                R$
              </TableCell>
              <TableCell variant="body1" className={classes.firstHeaderCell}>
                %
              </TableCell>
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
        <Checkbox
          checked={emailNotifications}
          onChange={() => {
            setProfileChanged(true);
            toggleEmailNotifications(!emailNotifications);
          }}
        />
        <Typography variant="body1">Allow Email notifications.</Typography>
      </div>
      <div className={classes.save}>
        <SaveButton
          variant="contained"
          color="primary"
          disabled={!profileChanged}
          type="submit"
        >
          save
        </SaveButton>
      </div>
    </form>
  );
}

export default withStyles(style)(SettingsScreen);
