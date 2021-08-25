import React from "react";
import useStyles from "../styles/BodyStyles";

const Body = (props) => {
  const classes = useStyles();

  return (
    // <div className={props.colorChange ? classes.rootChanged : classes.root}>
    <div className={classes.root}>
      <section className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>About</h2>
        <p className={classes.paragraphStyles}>
          I'm Angus. I'm a software engineer with a diverse technical
          background. I have been working as a technician, fixing and installing
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
        <ul className={classes.listStyles}>
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
            href="https://google.com"
            rel="noreferrer"
            target="_blank"
          >
            Find my resumé here
          </a>
        </h2>
      </section>
    </div>
  );
};
export default Body;
