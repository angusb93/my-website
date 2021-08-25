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
    fontSize: "40px",
    margin: "0.6rem",
    [sizes.down("sm")]: {
      fontSize: "30px",
      margin: "0.4rem",
    },
    [sizes.down("xs")]: {
      fontSize: "22px",
      margin: "0.2rem",
    },
  },
  link: {
    color: "white",
    // color: "black",
    textDecoration: "none",
    position: "relative",
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

  projectCard: {
    // border: "2px solid white",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1rem",
    [sizes.down("sm")]: {
      margin: "0.3rem",
      padding: "0.3rem",
    },
  },
  projectCardTitles: {
    margin: "0",
  },
  projectParagraph: {
    // float: "left",
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
    marginLeft: "1rem",
    display: "flex",
    border: "2px solid white",
    borderRadius: "10px",
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
  footer: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  icons: {
    margin: "10px",
  },
}));
export default useStyles;
