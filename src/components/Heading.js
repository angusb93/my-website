import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { SocialIcon } from "react-social-icons";
import andy from "../images/andy.png";
import sizes from "./sizes";
const useStyles = makeStyles({
  root: {
    margin: "0",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    color: "#232129",
    backgroundImage: `url(${andy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "all 650ms ease-in-out",

    [sizes.down("lg")]: {
      backgroundSize: "1400px",
    },
    [sizes.down("md")]: {
      backgroundImage: `none`,
    },
  },
  rootChanged: {
    margin: "0",
    height: "100vh",
    width: "100vw",
    color: "#232129",
    background: "rgb(40,39,37,1)",
    transition: "all 650ms ease-in-out",
    [sizes.down("lg")]: {
      backgroundSize: "1400px",
    },
    [sizes.down("md")]: {
      backgroundImage: `none`,
    },
  },

  pageStyles: {
    margin: "auto",
    paddingTop: "5rem",
    display: "flex",
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "20px",
    color: "black",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      // width: "90%",
      fontSize: "20px",
    },
    [sizes.down("sm")]: {
      // width: "90%",
      fontSize: "18px",
      paddingTop: "4rem",
    },
    [sizes.down("xs")]: {
      fontSize: "14px",
    },
  },
  headingStyles: {
    fontSize: "3rem",
    paddingTop: "10rem",
    [sizes.down("md")]: {
      fontSize: "4rem",
    },
    [sizes.down("sm")]: {
      paddingTop: "2rem",
    },
    [sizes.down("xs")]: {
      fontSize: "2rem",
      paddingTop: "0rem",
    },
    [sizes.down("xxs")]: {
      fontSize: "1.5rem",
    },
  },
  subheading: {
    fontSize: "4rem",
    padding: "2rem",
    paddingTop: "5rem",
    [sizes.down("md")]: {
      fontSize: "4rem",
    },
    [sizes.down("sm")]: {
      padding: "1rem",
    },
    [sizes.down("xs")]: {
      fontSize: "2rem",
    },
  },
  icons: {
    marginLeft: "10px",
  },
  contact: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    display: "inline-block",
    animation: "$loop 10s linear infinite",
    transition: "all 300ms cubic-bezier(0, 0.8, 0.13, 1)",
    "&:hover": {
      fill: "#1e8feb",
    },
  },
  svg: {
    //scale to half size
    [sizes.down("sm")]: {
      transform: "scale(0.9)",
    },
    [sizes.down("xs")]: {
      transform: "scale(0.9)",
    },
    [sizes.down("xxs")]: {
      transform: "scale(0.8)",
    },
  },
  "@keyframes loop": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  "@keyframes scale": {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0.45)" },
  },
});
const Heading = (props) => {
  const classes = useStyles();
  return (
    <div className={props.colorChange ? classes.rootChanged : classes.root}>
      {/* <img className={classes.myHead} src={andy} alt="" /> */}
      <div className={classes.pageStyles}>
        <h1 className={classes.subheading}>
          Hi, I'm Angus. <br /> An aspiring creative technologist.
        </h1>
        {/* Say hello here →
          <SocialIcon
            network="email"
            url="https://mail.google.com/mail/u/0/?fs=1&to=angusbuick@gmail.com&su=Hi,%20I%20Saw%20Your%20Website&tf=cm"
            className={classes.icons}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/angusbuick/"
            className={classes.icons}
          /> */}
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
