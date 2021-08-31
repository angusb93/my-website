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
    fontSize: "20px",
    [sizes.down("xl")]: {
      width: "60%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("md")]: {
      width: "90%",
      fontSize: "18px",
    },
    [sizes.down("sm")]: {},
    [sizes.down("xs")]: {
      fontSize: "16px",
    },
    [sizes.down("xxs")]: {
      fontSize: "13px",
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

  headingStyles: {
    textAlign: "left",
    fontSize: "25px",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "1rem",
    [sizes.down("sm")]: {
      fontSize: "20px",
      margin: "0.3rem",
    },
    [sizes.down("xs")]: {
      fontSize: "15px",
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
        // text is half white and half black changes on hover
      },
    },
  },
  listStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: "15px",
    flexWrap: "wrap",
    paddingBottom: "4rem",
    [sizes.down("sm")]: {
      margin: "0rem",
      fontSize: "12px",
    },
  },
  listItemStyles: {
    display: "inline-block",
    float: "bottom",
    textAlign: "center",
    width: "200px",
    margin: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  listPara: {
    justifyContent: "center",
    position: "",
  },
  images: {
    zIndex: "3",
    width: "100px",
    height: "100px",
    border: "2px solid black",
    marginBottom: "1rem",
    background: "white",
    // filter: "grayscale(100%)",
    margin: "auto",
    marginTop: "0",
    display: "block",
    borderRadius: "50%",
    [sizes.down("sm")]: {
      width: "80px",
      height: "80px",
    },
  },
}));

export default useStyles;
