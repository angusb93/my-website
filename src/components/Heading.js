import React from "react";
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
const Heading = () => {
  return (
    <h1 style={headingStyles}>
      <span style={angusStyles}>ANGUS </span>
      <br />
      <span style={buickStyles}>BUICK</span>
    </h1>
  );
};

export default Heading;
