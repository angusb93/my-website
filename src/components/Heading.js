import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";
import andy from "./andy.png";
import background from "./background.png";
// import "./noise.css";
const useStyles = makeStyles({
  root: {
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    background: "rgb(240,240,240)",
  },
  "@-webkit-keyframes noise": {
    "0%": { transform: "translate3d(0, 9rem, 0)" },
    "10%": { transform: "translate3d(-1rem, -4rem, 0)" },
    "20%": { transform: "translate3d(-8rem, 2rem, 0)" },
    "30%": { transform: "translate3d(9rem, -9rem, 0)" },
    "40%": { transform: "translate3d(-2rem, 7rem, 0)" },
    "50%": { transform: "translate3d(-9rem, -4rem, 0)" },
    "60%": { transform: "translate3d(2rem, 6rem, 0)" },
    "70%": { transform: "translate3d(7rem, -8rem, 0)" },
    "80%": { transform: "translate3d(-9rem, 1rem, 0)" },
    "90%": { transform: "translate3d(6rem, -5rem, 0)" },
    to: { transform: "translate3d(-7rem, 0, 0)" },
  },
  "@keyframes noise": {
    "0%": { transform: "translate3d(0, 9rem, 0)" },
    "10%": { transform: "translate3d(-1rem, -4rem, 0)" },
    "20%": { transform: "translate3d(-8rem, 2rem, 0)" },
    "30%": { transform: "translate3d(9rem, -9rem, 0)" },
    "40%": { transform: "translate3d(-2rem, 7rem, 0)" },
    "50%": { transform: "translate3d(-9rem, -4rem, 0)" },
    "60%": { transform: "translate3d(2rem, 6rem, 0)" },
    "70%": { transform: "translate3d(7rem, -8rem, 0)" },
    "80%": { transform: "translate3d(-9rem, 1rem, 0)" },
    "90%": { transform: "translate3d(6rem, -5rem, 0)" },
    to: { transform: "translate3d(-7rem, 0, 0)" },
  },
  noise: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: "0",
    top: "0",
    pointerEvents: "none",
    zIndex: "1",

    "&:after": {
      content: '""',
      width: "calc(100% + 20rem)",
      height: "calc(100% + 20rem)",
      backgroundImage: `url(${background})`,
      backgroundPosition: "50%",
      position: "absolute",
      left: "-10rem",
      top: "-10rem",
      willChange: "transform",
      WebkitAnimation: "$noise 1s steps(2) infinite",
      animation: "$noise 1s steps(2) infinite",
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
    zIndex: "1",
  },
});
const Heading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.myHead}
        style={{ opacity: "0.8" }}
        src={andy}
        alt=""
      />
      <div className={classes.pageStyles}>
        <h2 className={classes.headingStyles}>
          <div>ANGUS </div>
          <div className={classes.buickStyles}>BUICK</div>
        </h2>
        <h1 className={classes.subheading}>
          I'm an aspiring creative <br /> technologist.
        </h1>
        <h2>
          Say hello here →
          <SocialIcon
            network="email"
            url="https://mail.google.com/mail/u/0/?fs=1&to=angusbuick@gmail.com&su=Hi,%20I%20Saw%20Your%20Website&tf=cm"
            className={classes.icons}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/angusbuick/"
            className={classes.icons}
          />
        </h2>
      </div>
      <div className={classes.noise}></div>
    </div>
  );
};

export default Heading;
