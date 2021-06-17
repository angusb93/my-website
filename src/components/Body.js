import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    paddingTop: "25rem",
    display: "flex",
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "large",
  },
}));

export default function Body() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section>
        <h2>About</h2>
        <p>
          I'm Angus. I'm a software engineer with a diverse technical
          background. I'm looking for front-end developer or creative
          technologist roles.
        </p>
      </section>
      <section>
        <h2>Education</h2>
        <ul>
          <li>
            Macquarie University - Bachelor of Engineering (Mechatronic)(Hons)
          </li>
          <li>UNSW - Graduate Certificate in Computing</li>
          <li>Udemy - The Web Developer Bootcamp 2021</li>
          <li>Udemy - The Modern React Bootcamp 2021</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Color Picker</li>
          <li>YelpCamp</li>
          <li>Thesis</li>
        </ul>
      </section>
      <div>
        <LoremIpsum p={5} />
      </div>
    </div>
  );
}
