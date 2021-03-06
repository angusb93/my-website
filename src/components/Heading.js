import React from "react";
import { Typewriter } from "react-simple-typewriter";
import useStyles from "../styles/HeadingStyles";

const Heading = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.pageStyles}>
        <h1 className={classes.heading}>
          Hi, I'm Angus. An aspiring{" "}
          <Typewriter
            words={[
              " creative technologist.",
              " front-end developer.",
              " time traveller.",
              " creative developer.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
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
            fill={props.colorChange ? "white" : null}
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
            <text fontSize="11">
              <textPath href="#circle">
                Contact &nbsp;&nbsp; Contact &nbsp;&nbsp; Contact &nbsp;&nbsp;
                Contact
              </textPath>
            </text>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Heading;
