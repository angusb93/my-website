import React from "react";
import "@fontsource/noto-sans-jp";
import andy from "./andy.png";
// import Heading from "../components/Heading";
import Nav from "../components/Nav";
import Body from "../components/Body";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pageStyles: {
    color: "#232129",
    backgroundImage: `url(${andy})`,
    backgroundSize: "1200px",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    height: "80vh",
    position: "relative",
    fontFamily: "Noto Sans JP",
    margin: "0px",
    padding: "0",
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <main className={classes.pageStyles}>
      <Nav />
      {/* <Heading /> */}
      <Body />
    </main>
  );
};

export default App;
