import { makeStyles } from "@material-ui/core/styles";
import sizes from "./sizes";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    height: "100%",
    width: "100vw",
  },

  pageStyles: {
    margin: "auto",
    // paddingTop: "5rem",
    display: "flex",
    width: "40%",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "25px",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "90%",
      fontSize: "22px",
    },
    [sizes.down("sm")]: {},
    [sizes.down("xs")]: {
      fontSize: "18px",
    },
    [sizes.down("xxs")]: {
      fontSize: "15px",
    },
  },
  paragraphStyles: {
    margin: "auto",
    marginBottom: "1rem",
    [sizes.down("sm")]: {
      margin: "0.5rem",
    },
    [sizes.down("xs")]: {
      margin: "0.2rem",
    },
  },
  listStyles: {
    // margin: "auto",
    // marginBottom: "1rem",
    [sizes.down("sm")]: {
      margin: "0rem",
      paddingLeft: "1.4rem",
    },
  },
  headingStyles: {
    textAlign: "left",
    fontSize: "25px",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "1rem",
    [sizes.down("sm")]: {
      fontSize: "35px",
      margin: "0.3rem",
    },
    [sizes.down("xs")]: {
      fontSize: "20px",
    },
  },
  link: {
    color: "black",
    textDecoration: "none",
    position: "relative",
    transition: "all 650ms ease-in-out",
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: "1",
      top: "60%",
      left: "-0.1em",
      right: "-0.1em",
      bottom: "0",
      transition: "top 200ms cubic-bezier(0, 0.8, 0.13, 1)",
      backgroundColor: "rgba(30,143,235,0.5)",
    },
    //rule that makes background halfway and then goes up to max once mouse is over
    "&:hover": {
      "&:after": {
        top: "0%",
      },
    },
  },
  linkChanged: {
    color: "white",
    textDecoration: "none",
    position: "relative",
    transition: "all 650ms ease-in-out",
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: "1",
      top: "60%",
      left: "-0.1em",
      right: "-0.1em",
      bottom: "0",
      transition: "top 200ms cubic-bezier(0, 0.8, 0.13, 1)",
      backgroundColor: "rgba(40,153,245,0.5)",
    },
    //rule that makes background halfway and then goes up to max once mouse is over
    "&:hover": {
      "&:after": {
        top: "0%",
      },
    },
  },
}));

export default useStyles;
