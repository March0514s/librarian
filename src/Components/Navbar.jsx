import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        backgroundColor: 'white', 
        color: 'rgb(206, 197, 70)',
        textTransform: 'capitalize',
        display:'flex',
        justifyContent: 'space-between',
    },
});

const MainButton = withStyles(theme => ({
    root: {
      backgroundColor: 'rgb(206, 197, 70)',
      color: 'white',
      textTransform: 'uppercase',
      marginLeft: '10px',
      marginRight: '10px',
    "&:hover": {
        backgroundColor: "rgb(180, 187, 60)"
      }
    }
  }))(Button)

function Navbar(props) {
  const { classes } = props;

  return (
    <div>
        <AppBar position="relative">
            <Toolbar className={classes.root}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6'>
                    librarian
                </Typography>
                <div>
                    <MainButton component={Link} to="/signup">signup</MainButton>
                    <Link>
                    <Button className={classes.button} variant="outlined" color="inherit" component={Link} to="/login">login</Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
