import React from "react";

import reactColors from "../images/reactColors.png";
import yelpCamp from "../images/yelpCamp.png";
import thesisImage from "../images/thesisImage.png";
import useStyles from "../styles/ProjectStyles";
import thesis from "../images/thesis.pdf";

export default function Projects(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>Projects</h2>
        <div
          className={
            props.colorChange ? classes.projectCard : classes.projectCardChanged
          }
        >
          <h4 className={classes.projectCardTitles}>
            <a
              className={props.colorChange ? classes.linkChanged : classes.link}
              href={thesis}
              target="_blank"
              rel="noreferrer"
            >
              Thesis
            </a>
          </h4>

          <p className={classes.projectParagraph}>
            <a href={thesis} target="_blank" rel="noreferrer">
              <img className={classes.images} src={thesisImage} alt="" />
            </a>
            <div className={classes.projectText}>
              The thesis I completed for my engineering honors year was titled
              "Autonomous Automotive Wind Tunnel Model". I explored different
              control systems and methodolgies for keeping a minature model
              "driving" by itself on a moving ground within a wind tunnel.
            </div>
          </p>
        </div>
        <div
          className={
            props.colorChange ? classes.projectCard : classes.projectCardChanged
          }
        >
          <h4 className={classes.projectCardTitles}>
            <a
              className={props.colorChange ? classes.linkChanged : classes.link}
              href="https://angus-color-picker.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Color Picker
            </a>
          </h4>

          <p className={classes.projectParagraph}>
            <a
              href="https://angus-color-picker.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.images} src={reactColors} alt="" />
            </a>
            <div className={classes.projectText}>
              Color picker is a clone of 'flat ui colors' that allows you to
              create color palettes to be used in any digital creative endevour.
              It allows you to select which format you would like from HEX, RGB
              and RGBA. As well as change the shade. This project was completed
              through the "Modern React Bootcamp" course that I completed on
              Udemy, taught by Colte Steele. It uses React, React-Router and
              Material UI.
            </div>
          </p>
        </div>
        <div
          className={
            props.colorChange ? classes.projectCard : classes.projectCardChanged
          }
        >
          <h4 className={classes.projectCardTitles}>
            <a
              className={props.colorChange ? classes.linkChanged : classes.link}
              href="https://angus-yelpcamp.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              YelpCamp
            </a>
          </h4>

          <p className={classes.projectParagraph}>
            <a
              href="https://angus-yelpcamp.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={classes.images} src={yelpCamp} alt="" />
            </a>
            <div className={classes.projectText}>
              YelpCamp is a site where you can login and post campsites with
              images and locations. Other users can view the campsites and post
              reviews if they are logged in. Its built on Mongo/Express/Node/EJS
              and Bootsrap 4 styling. This project was completed through the
              popular "Web Developer Bootcamp 2021" course on Udemy, taught by
              Colt Steele.
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}
