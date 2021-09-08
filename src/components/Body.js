import React from "react";
import useStyles from "../styles/BodyStyles";
import macqLogo from "../images/macqLogo.png";
import UNSWLogo from "../images/unswLogo.jpeg";
import udemyLogo from "../images/udemyLogo.png";
import resume from "../images/resume.pdf";

const Body = (props) => {
  const classes = useStyles();
  return (
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
          robotics. I then went on to study computing at UNSW where I learnt
          about data structures, algorithms, databases and networks.
        </p>
        <p className={classes.paragraphStyles}>
          I have also recently completed courses on modern web development
          through Udemy.{" "}
          <b>
            I'm looking for front-end developer or creative technologist roles.
          </b>
        </p>
        <h2 className={classes.headingStyles}>Education</h2>
        <div className={classes.listStyles}>
          <div className={classes.listItemStyles}>
            <img className={classes.images} src={macqLogo} alt="" />
            <span className={classes.listPara}>
              Macquarie University Bachelor of Engineering (Mechatronic)(Hons)
              <br />
              2018
            </span>
          </div>
          <div className={classes.listItemStyles}>
            <img className={classes.images} src={UNSWLogo} alt="" />
            <span className={classes.listPara}>
              UNSW Graduate Certificate in Computing <br />
              2020
            </span>
          </div>
          <div className={classes.listItemStyles}>
            <img className={classes.images} src={udemyLogo} alt="" />
            <span className={classes.listPara}>
              Udemy The Web Developer Bootcamp <br />
              2021
            </span>
          </div>
          <div className={classes.listItemStyles}>
            <img className={classes.images} src={udemyLogo} alt="" />
            <span className={classes.listPara}>
              Udemy The Modern React Bootcamp <br />
              2021
            </span>
          </div>
        </div>
        <h2 className={classes.headingStyles}>
          <a
            className={props.colorChange ? classes.linkChanged : classes.link}
            href={resume}
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
