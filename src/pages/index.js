import React from "react";
import "@fontsource/noto-sans-jp";
import andy from "./andy.png";

const pageStyles = {
  color: "#232129",
  backgroundImage: `url(${andy})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  height: "100vh",
  position: "relative",
  paddingRight: "400px",
  fontFamily: "Noto Sans JP",
  float: "right",
};

const headingStyles = {
  fontSize: "100px",
};
const App = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>ANGUS BUICK</h1>
    </main>
  );
};

export default App;
