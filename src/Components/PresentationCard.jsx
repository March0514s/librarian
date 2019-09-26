import React from "react";

//MUI
import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "370px",
    marginRight: "25px",
    marginLeft: "25px"
  },
  outside: {
    width: "370px"
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // height: "300px",
    marginLeft: "25px",
    marginRight: "25px",

    "& div": {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
      marginBottom: "50px"
    },
    "& h6": {
      color: "rgb(206, 197, 70)",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      marginBottom: "5px",
      fontSize: "30px"
    },
    icon: {}
  },
  header: {
    backgroundColor: "#CEC546"
  }
});

function PresentationCard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card elevation={2}>
          
        <CardHeader className={classes.header} />
        {props.image ? 
        <CardMedia
                component="img"
                alt="Card Image"
                height="250"
                image={props.image}
                title="Card Image"
              /> :
              null
            }
        <CardContent className={classes.inside}>
          {props.icon ? 
          <div>
              <FontAwesomeIcon icon={props.icon} size="6x" color="gray"/>
          </div> :
          null
          }
          <Typography variant="h6">{props.title}</Typography>
          <Divider />
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            eos velit veniam accusamus saepe dolore.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(style)(PresentationCard);
