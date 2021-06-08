import React from "react";
import "@fontsource/noto-sans-jp";
import andy from "./andy.png";

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

const headingStyles = {
  fontSize: "8rem",
  float: "left",
};
const angusStyles = {
  paddingLeft: "150px",
};
const buickStyles = {
  paddingLeft: "240px",
};
const App = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={angusStyles}>ANGUS </span>
        <br />
        <span style={buickStyles}>BUICK</span>
      </h1>
    </main>
  );
};

export default App;
