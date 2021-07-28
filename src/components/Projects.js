import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
    paddingTop: "5rem",
    display: "flex",
    width: "30%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "20px",
    color: "black",
  },
  headingStyles: {
    textAlign: "left",
    fontSize: "40px",
  },
  h4: {
    marginBottom: "0%",
  },
  a: {
    backgroundColor: "rgba(79, 192, 141, 0.5)",
  },
}));
export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>Projects</h2>
        <h4 className={classes.projectStyles}>
          {" "}
          <a href="https://angus-color-picker.netlify.app/"> Color Picker</a>
        </h4>
        <p>
          Color picker is a clone of 'flat ui colors' that allows you to create
          color palettes to be used in any digital creative endevour. It allows
          you to select which format you would like from HEX, RGB and RGBA. As
          well as change the shade. This project was completed through the
          "Modern React Bootcamp" course that I completed on Udemy. It uses
          React Router and Material UI.
        </p>

        <h4>YelpCamp</h4>
        <p>
          YelpCamp is a site where you can login and post campsites with images
          and locations. Other users can view the campsites and post reviews if
          they are logged in. Its built on Mongo/Express/Node/EJS and Bootsrap 4
          styling. This project was completed through the popular "Web Developer
          Bootcamp 2021" course on Udemy, taught by Colt Steele.
        </p>
        <h2>Thesis</h2>
      </section>
    </div>
  );
}