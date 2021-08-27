import andy from "../images/andy.png";
import sizes from "./sizes";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    margin: "0",
    height: "100vh",
    minHeight: "100%",
    width: "100vw",
    overflow: "hidden",
    color: "#232129",
    backgroundImage: `url(${andy})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

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
    width: "60%",
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
    [sizes.down("md")]: {
      // width: "90%",
      fontSize: "16px",
    },
    [sizes.down("sm")]: {
      paddingTop: "4rem",
    },
    [sizes.down("xs")]: {
      fontSize: "14px",
    },
  },
  subheading: {
    fontSize: "3.5rem",
    padding: "2rem",
    paddingTop: "5rem",
    [sizes.down("md")]: {
      fontSize: "2.5rem",
    },
    [sizes.down("sm")]: {
      padding: "1rem",
    },
    [sizes.down("xs")]: {
      fontSize: "2rem",
    },
  },

  contact: {
    width: "200px",
    height: "200px",
    position: "absolute",
    marginTop: "40rem",
    marginBottom: "4rem",
    display: "inline-block",
    animation: "$loop 80s linear infinite",
    transition: "all 300ms cubic-bezier(0, 0.8, 0.13, 1)",
    textTransform: "uppercase",
    "&:hover": {
      fill: "rgb(10,123,215)",
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
