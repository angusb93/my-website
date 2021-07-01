import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "blue",
  },
  pageStyles: {
    margin: "auto",
    paddingTop: "5rem",
    display: "flex",
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "large",
    color: "white",
  },
}));
export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.pageStyles}>
        <h2>Projects</h2>
        <h4> Color Picker</h4>
        <p>
          Color picker is a clone of 'flat ui colors' that allows you to create
          color palettes to be used in any digital creative endevour. It allows
          you to select which format you would like from HEX, RGB and RGBA. With
          the added functionality of being able to change the shade. This
          project was completed through the "Modern React Bootcamp" course that
          I did on Udemy
        </p>
        <h2>YelpCamp</h2>
        <p>Yel</p>
        <h2>Thesis</h2>
      </section>
    </div>
  );
}
