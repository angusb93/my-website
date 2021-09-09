import sizes from "../styles/sizes";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    height: "100%",
    width: "100vw",
    overflow: "hidden",
  },
  pageStyles: {
    margin: "auto",
    paddingTop: "8rem",
    display: "flex",
    width: "40%",
    fontSize: "20px",
    flexDirection: "column",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "90%",
      fontSize: "16px",
    },
    [sizes.down("sm")]: {
      width: "90%",
      fontSize: "14px",
      // flexDirection: "row",
    },

    justifyContent: "center",
  },
  headingStyles: {
    textAlign: "left",
    fontSize: "25px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    margin: "0.6rem",
    marginBottom: "2rem",
    [sizes.down("sm")]: {
      fontSize: "20px",
      marginBottom: "1rem",
    },
    [sizes.down("xs")]: {
      fontSize: "18px",
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
    "&:hover": {
      "&:after": {
        top: "0%",
      },
    },
  },

  projectCard: {
    padding: "1rem",
    borderRadius: "20px",
    marginBottom: "3rem",
    transition: "all 650ms ease-in-out",
    boxShadow:
      "-11px -11px 20px -6px rgb(0,0,0), 10px 10px 15px -10px rgb(255 255 255 / 50%)",
    [sizes.down("sm")]: {
      borderRadius: "10px",
      marginBottom: "2rem",
      padding: "0.3rem",
    },
  },
  projectCardChanged: {
    padding: "1rem",
    borderRadius: "20px",
    marginBottom: "3rem",
    transition: "all 650ms ease-in-out",

    boxShadow:
      "-11px -11px 20px -6px rgb(255,255,255), 10px 10px 15px -10px rgb(20 20 20 / 50%)",
    [sizes.down("sm")]: {
      margin: "0.3rem",
      padding: "0.3rem",
    },
  },
  projectCardTitles: {
    margin: "0.5rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
  projectParagraph: {
    display: "flex",
    [sizes.down("sm")]: {
      flexDirection: "column",
      margin: "0.3rem",
    },
  },
  projectText: {
    [sizes.down("sm")]: {
      display: "none",
    },
  },
  images: {
    width: "300px",
    // float: "right",
    marginRight: "1rem",
    display: "flex",
    border: "2px solid white",
    borderRadius: "5px",
    transform: "scale(0.95)",
    transition: "300ms cubic-bezier(0, 0.8, 0.13, 1)",
    [sizes.down("sm")]: {
      width: "70%",
      margin: "auto",
    },

    "&:hover": {
      transform: "scale(1)",
    },
  },
}));
export default useStyles;
