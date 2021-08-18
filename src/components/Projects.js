import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import reactColors from "../images/reactColors.png";
import yelpCamp from "../images/yelpCamp.png";
import thesisImage from "../images/thesisImage.png";
import sizes from "./sizes";
import thesis from "../images/thesis.pdf";

// [sizes.down("xl")]: {
//   fontSize: "3rem",
// },
// [sizes.down("xs")]: {
//   fontSize: "3rem",
// },
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    background: "white",
  },
  pageStyles: {
    margin: "auto",
    // paddingTop: "5rem",
    display: "flex",
    width: "40%",
    fontSize: "20px",
    flexDirection: "column",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "90%",
      fontSize: "16px",
    },
    [sizes.down("sm")]: {
      width: "90%",
      fontSize: "14px",
      // flexDirection: "row",
    },

    justifyContent: "center",
    color: "black",
  },
  headingStyles: {
    textAlign: "left",
    fontSize: "40px",
    margin: "0.6rem",
    [sizes.down("sm")]: {
      fontSize: "30px",
      margin: "0.4rem",
    },
    [sizes.down("xs")]: {
      fontSize: "22px",
      margin: "0.2rem",
    },
  },
  link: {
    // backgroundColor: "rgba(30,143,235,0.5)",
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

  projectCard: {
    border: "2px solid rgb(30,143,235)",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1rem",
    [sizes.down("sm")]: {
      margin: "0.3rem",
      padding: "0.3rem",
    },
  },
  projectCardTitles: {
    margin: "0",
  },
  projectParagraph: {
    // float: "left",
    display: "flex",
    [sizes.down("sm")]: {
      flexDirection: "column",
      margin: "0.3rem",
    },
  },
  projectText: {
    [sizes.down("sm")]: {
      display: "none",
    },
  },
  images: {
    width: "300px",
    // float: "right",
    display: "flex",
    border: "2px solid rgb(30,143,235)",
    borderRadius: "10px",
    transform: "scale(0.95)",
    transition: "300ms cubic-bezier(0, 0.8, 0.13, 1)",
    [sizes.down("sm")]: {
      width: "70%",
      margin: "auto",
    },

    "&:hover": {
      transform: "scale(1)",
    },
  },
}));
export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>Projects</h2>
        <div className={classes.projectCard}>
          <h4 className={classes.projectCardTitles}>
            <a
              className={classes.link}
              href="https://angus-color-picker.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Color Picker
            </a>
          </h4>

          <p className={classes.projectParagraph}>
            <div className={classes.projectText}>
              Color picker is a clone of 'flat ui colors' that allows you to
              create color palettes to be used in any digital creative endevour.
              It allows you to select which format you would like from HEX, RGB
              and RGBA. As well as change the shade. This project was completed
              through the "Modern React Bootcamp" course that I completed on
              Udemy. It uses React Router and Material UI.
            </div>
            <a
              href="https://angus-color-picker.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.images} src={reactColors} alt="" />
            </a>
          </p>
        </div>
        <div className={classes.projectCard}>
          <h4 className={classes.projectCardTitles}>
            <a
              className={classes.link}
              href="https://angus-yelpcamp.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              YelpCamp
            </a>
          </h4>

          <p className={classes.projectParagraph}>
            <div className={classes.projectText}>
              YelpCamp is a site where you can login and post campsites with
              images and locations. Other users can view the campsites and post
              reviews if they are logged in. Its built on Mongo/Express/Node/EJS
              and Bootsrap 4 styling. This project was completed through the
              popular "Web Developer Bootcamp 2021" course on Udemy, taught by
              Colt Steele.
            </div>
            <a
              href="https://angus-yelpcamp.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.images} src={yelpCamp} alt="" />
            </a>
          </p>
        </div>
        <div className={classes.projectCard}>
          <h4 className={classes.projectCardTitles}>
            <a
              className={classes.link}
              href={thesis}
              target="_blank"
              rel="noreferrer"
            >
              Thesis
            </a>
          </h4>

          <p className={classes.projectParagraph}>
            <div className={classes.projectText}>
              The thesis I completed for my engineering honors year was titled
              "Autonomous Automotive Wind Tunnel Model". I explored different
              control systems and methodolgies for keeping a minature model
              "driving" by itself on a moving ground within a wind tunnel.
            </div>
            <a href={thesis} target="_blank" rel="noreferrer">
              <img className={classes.images} src={thesisImage} alt="" />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
