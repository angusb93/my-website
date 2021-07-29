import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";
import andy from "./andy.png";
// import "./noise.css";
const useStyles = makeStyles({
  root: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    color: "#232129",
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
  },
  headingStyles: {
    fontSize: "3rem",
    paddingTop: "4rem",
  },

  buickStyles: {
    paddingLeft: "6rem",
    lineHeight: "30%",
    justifyContent: "center",
  },
  subheading: {
    fontSize: "4rem",
    // paddingLeft: "4rem",
    // width: "60%",
  },
  icons: {
    marginLeft: "10px",
  },
  myHead: {
    position: "fixed",
    marginLeft: "2rem",
    paddingTop: "-4rem",
    opacity: "0.8",
    // zIndex: "1",
  },
  contact: {
    width: "200px",
    height: "200px",
    overflow: "hidden",
    display: "block",
    transformOrigin: "center center",
    animation: "$loop 10s linear infinite",
    transition: "all 400ms ease-in-out",
    "&:hover": {
      transition: "all 400ms ease-in-out",
      animationDuration: "5s",
      width: "20%",
      transform: "scale(1.1)",
    },
  },
  svg: {
    float: "left",
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
const Heading = () => {
  const classes = useStyles();
  function changeBackground(e) {
    e.target.style.background = "red";
  }
  return (
    <div className={classes.root}>
      <img className={classes.myHead} src={andy} alt="" />
      <div className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>
          <div>ANGUS </div>
          <div className={classes.buickStyles}>BUICK</div>
        </h2>
        <h1 className={classes.subheading}>
          I'm an aspiring creative <br /> technologist.
        </h1>
        {/* <h2> */}
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
        <div>
          <button onMouseOver={changeBackground}>Hover over me!</button>
        </div>
        <div className={classes.contact}>
          <svg viewBox="0 0 120 120" width="100%" height="auto">
            <defs>
              <path
                id="circle"
                // d="M50,100a50,50 0 1,0 100,0a50,50 0 1,0 -100,0"
                d="M50, 60
                m -37, 0
                a 37,37 0 1,1 94,0
                a 37,37 0 1,1 -94,0"
              />
            </defs>
            <text font-size="17">
              <textPath href="#circle">
                Contact &nbsp; Contact &nbsp; Contact &nbsp; Contact
              </textPath>
            </text>
          </svg>
        </div>
        {/* </h2> */}
      </div>
    </div>
  );
};

export default Heading;
