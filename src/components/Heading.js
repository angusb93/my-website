import React from "react";
import { Typewriter } from "react-simple-typewriter";
import useStyles from "../styles/HeadingStyles";

const Heading = (props) => {
  const classes = useStyles();
  return (
    <div className={props.colorChange ? classes.rootChanged : classes.root}>
      <div className={classes.pageStyles}>
        <h1 className={classes.subheading}>
          Hi, I'm Angus. An aspiring <br />
          <Typewriter
            words={[" creative technologist.", " front-end web developer."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <a
          className={classes.contact}
          href="https://mail.google.com/mail/u/0/?fs=1&to=angusbuick@gmail.com&su=Hi,%20I%20Saw%20Your%20Website&tf=cm"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className={classes.svg}
            viewBox="0 0 120 120"
            width="100%"
            length="auto"
          >
            <defs>
              <path
                id="circle"
                d="M50, 60
                m -37, 0
                a 37,37 0 1,1 94,0
                a 37,37 0 1,1 -94,0"
              />
            </defs>
            <text fontSize="17">
              <textPath href="#circle">
                Contact &nbsp; Contact &nbsp; Contact &nbsp; Contact
              </textPath>
            </text>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Heading;
