import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headingStyles: {
    fontSize: "8rem",
    float: "left",
  },
  angusStyles: {
    paddingLeft: "150px",
  },
  buickStyles: {
    paddingLeft: "240px",
  },
});
const Heading = () => {
  const classes = useStyles();
  return (
    <h1 style={classes.headingStyles}>
      <span style={classes.angusStyles}>ANGUS </span>
      <br />
      <span style={classes.buickStyles}>BUICK</span>
    </h1>
  );
};

export default Heading;
