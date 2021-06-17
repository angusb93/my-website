import React from "react";
import "@fontsource/noto-sans-jp";
import andy from "./andy.png";
import Heading from "../components/Heading";
// import Nav from "../components/Nav";
import Body from "../components/Body";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pageStyles: {
    color: "#232129",
    // // backgroundImage: `url(${andy})`,
    // backgroundSize: "1200px",
    // backgroundPosition: "center 15rem",
    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    // height: "80vh",
    // position: "relative",
    fontFamily: "Noto Sans JP",
    margin: "0px",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    width: "75%",
  },
  myHead: {
    position: "fixed",
    marginLeft: "2rem",
    paddingTop: "-4rem",
    zIndex: "-2",
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <main className={classes.pageStyles}>
      <img
        className={classes.myHead}
        style={{ opacity: "0.8" }}
        src={andy}
        alt=""
      />
      <Heading />
      <Body />
    </main>
  );
};

export default App;
