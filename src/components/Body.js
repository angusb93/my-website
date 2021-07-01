import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    // background: "rgb(238,174,202)",
    // background:
    //   "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  },
  pageStyles: {
    margin: "auto",
    paddingTop: "5rem",
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
      <section className={classes.pageStyles}>
        <h2>About</h2>
        <p>
          I'm Angus. I'm a software engineer with a diverse technical
          background. I studied mechatronic engineering for my undergraduate at
          Macquarie where I learnt about mathematics, electronics, control
          systems and robotics.
        </p>
        <p>
          I then studied computing at UNSW where I learnt about data structures,
          algorithms, databases and networks.
        </p>
        <p>
          I have also recently done some courses on modern web development
          through Udemy. I have been working as a technician fixing and
          installing anything from CNC routers to servers and everything in
          between.{" "}
          <b>
            I'm looking for front-end developer or creative technologist roles.
          </b>
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

      {/* <div>
        <LoremIpsum p={5} />
      </div> */}
    </div>
  );
}
