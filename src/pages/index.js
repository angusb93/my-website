import React from "react";
import "@fontsource/noto-sans-jp";
import andy from "./andy.png";
import Heading from "../components/Heading";
import Nav from "../components/Nav";

const pageStyles = {
  color: "#232129",
  backgroundImage: `url(${andy})`,
  backgroundSize: "contain",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  height: "70vh",
  position: "relative",
  fontFamily: "Noto Sans JP",
};

const App = () => {
  return (
    <main style={pageStyles}>
      <Nav />
      <Heading />
    </main>
  );
};

export default App;
