import React from "react";
import useStyles from "../styles/FooterStyles";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <SocialIcon
        url="https://www.linkedin.com/in/angusbuick/"
        bgColor="white"
        className={classes.icons}
        target="_blank"
        rel="noreferrer"
      />
      <SocialIcon
        url="https://github.com/angusb93"
        bgColor="white"
        className={classes.icons}
        target="_blank"
        rel="noreferrer"
      />
      <br />
      Angus Buick © 2021
    </footer>
  );
}
