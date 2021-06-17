import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { SocialIcon } from "react-social-icons";
const useStyles = makeStyles({
  root: {
    margin: "0",
  },
  title: {
    marginLeft: "2rem",
  },
  icons: {
    postion: "relative",
    float: "right",
    flexGrow: "1",
  },
});

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            About
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Résumé
          </Typography>
          <div className={classes.icons}>
            <SocialIcon
              network="email"
              url="https://mail.google.com/mail/u/0/?fs=1&to=angusbuick@gmail.com&su=Hi,%20I%20Saw%20Your%20Website&tf=cm"
              className={classes.icons}
              fgColor="red"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/angusbuick/"
              className={classes.icons}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
