import angus from "../images/angus.png";
import sizes from "./sizes";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    margin: "0",
    minHeight: "800px",
    height: "100vh",

    width: "100vw",
    overflow: "hidden",
    color: "#232129",
    backgroundImage: `url(${angus})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    [sizes.down("lg")]: {
      backgroundSize: "1400px",
      minHeight: "600px",
    },
    [sizes.down("md")]: {
      backgroundImage: `none`,
      minHeight: "500px",
    },
  },

  pageStyles: {
    margin: "auto",
    paddingTop: "5rem",
    display: "flex",
    width: "60%",
    minHeight: "inherit",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "18px",
    color: "black",
    [sizes.down("xl")]: {
      width: "70%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    // [sizes.down("md")]: {
    //   // width: "90%",
    //   fontSize: "16px",
    // },
    // [sizes.down("sm")]: {
    //   paddingTop: "4rem",
    // },
    // [sizes.down("xs")]: {
    //   fontSize: "14px",
    // },
  },
  heading: {
    fontSize: "3.5rem",
    marginTop: "10rem",
    height: "150px",
    [sizes.down("md")]: {
      fontSize: "2.5rem",
      marginTop: "8rem",
    },
    [sizes.down("sm")]: {
      fontSize: "2rem",
    },
    [sizes.down("xs")]: {
      fontSize: "1.8rem",
      marginTop: "7rem",
    },
    [sizes.down("xxs")]: {
      fontSize: "1.5rem",
      marginTop: "4rem",
    },
  },

  contact: {
    width: "200px",
    height: "200px",
    // position: "absolute",
    marginTop: "5rem",
    marginBottom: "4rem",
    // display: "inline-block",
    animation: "$loop 80s linear infinite",
    transition: "all 300ms ease-in-out",
    textTransform: "uppercase",
    "&:hover": {
      fill: "rgb(10,123,215)",
      stroke: "rgb(10,123,215)",
      strokeWidth: "1px",
      transition: "all 300ms  ease-in-out",
    },
    [sizes.down("xs")]: {
      marginTop: "2rem",
    },
    [sizes.down("xxs")]: {
      marginTop: "0",
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

export default useStyles;
