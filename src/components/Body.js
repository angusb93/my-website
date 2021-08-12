import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    background: "white",
    transition: "all 400ms cubic-bezier(0, 0.8, 0.13, 1)",
  },
  rootChanged: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    background: "rgb(40,39,37,1)",
    transitionDelay: "400ms",
    transition: "all 600ms cubic-bezier(0.13, 0.8, 0, 1)",
    color: "rgb(249,205,205)",
  },
  pageStyles: {
    margin: "auto",
    paddingTop: "5rem",
    display: "flex",
    width: "40%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "25px",
  },
  paragraphStyles: {
    margin: "auto",
    marginBottom: "1rem",
  },
  headingStyles: {
    textAlign: "left",
    fontSize: "40px",
    marginBottom: "1rem",
  },
  link: {
    color: "black",
    textDecoration: "none",
    position: "relative",

    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: "1",
      top: "60%",
      left: "-0.1em",
      right: "-0.1em",
      bottom: "0",
      transition: "top 200ms cubic-bezier(0, 0.8, 0.13, 1)",
      backgroundColor: "rgba(30,143,235,0.5)",
    },
    //rule that makes background halfway and then goes up to max once mouse is over
    "&:hover": {
      "&:after": {
        top: "0%",
      },
    },
  },
  linkChanged: {
    color: "rgb(249,205,205)",
    textDecoration: "none",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: "1",
      top: "60%",
      left: "-0.1em",
      right: "-0.1em",
      bottom: "0",
      transition: "top 200ms cubic-bezier(0, 0.8, 0.13, 1)",
      backgroundColor: "rgba(40,153,245,0.5)",
    },
    //rule that makes background halfway and then goes up to max once mouse is over
    "&:hover": {
      "&:after": {
        top: "0%",
      },
    },
  },
}));

export default function Body(props) {
  const classes = useStyles();
  return (
    <div className={props.colorChange ? classes.rootChanged : classes.root}>
      <section className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>About</h2>
        <p className={classes.paragraphStyles}>
          I'm Angus. I'm a software engineer with a diverse technical
          background. I have been working as a technician fixing and installing
          anything from CNC routers to servers and everything in between.
        </p>
        <p className={classes.paragraphStyles}>
          I studied mechatronic engineering for my undergraduate at Macquarie
          where I learnt about mathematics, electronics, control systems and
          robotics. I then studied computing at UNSW where I learnt about data
          structures, algorithms, databases and networks.
        </p>
        <p className={classes.paragraphStyles}>
          I have also recently done some courses on modern web development
          through Udemy.{" "}
          <b>
            I'm looking for front-end developer or creative technologist roles.
          </b>
        </p>

        <h2 className={classes.headingStyles}>Education</h2>
        <ul className={classes.paragraphStyles}>
          <li>
            Macquarie University - Bachelor of Engineering (Mechatronic)(Hons)
          </li>
          <li>UNSW - Graduate Certificate in Computing</li>
          <li>Udemy - The Web Developer Bootcamp 2021</li>
          <li>Udemy - The Modern React Bootcamp 2021</li>
        </ul>
        <h2 className={classes.headingStyles}>
          <a
            className={props.colorChange ? classes.linkChanged : classes.link}
            href="google.com"
            target="_blank"
          >
            Find my resumé here
          </a>
        </h2>
      </section>
    </div>
  );
}
