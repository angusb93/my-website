import React, { Component } from "react";
import "@fontsource/noto-sans-jp";

import Heading from "../components/Heading";
import Body from "../components/Body";
import Projects from "../components/Projects";
import { withStyles } from "@material-ui/core/styles";
import background from "./background.png";
const styles = {
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  root: {
    color: "#232129",
    fontFamily: "Noto Sans JP",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    margin: "0",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },

  "@keyframes noise": {
    "0%": { transform: "translate3d(0, 9rem, 0)" },
    "10%": { transform: "translate3d(-1rem, -4rem, 0)" },
    "20%": { transform: "translate3d(-8rem, 2rem, 0)" },
    "30%": { transform: "translate3d(9rem, -9rem, 0)" },
    "40%": { transform: "translate3d(-2rem, 7rem, 0)" },
    "50%": { transform: "translate3d(-9rem, -4rem, 0)" },
    "60%": { transform: "translate3d(2rem, 6rem, 0)" },
    "70%": { transform: "translate3d(7rem, -8rem, 0)" },
    "80%": { transform: "translate3d(-9rem, 1rem, 0)" },
    "90%": { transform: "translate3d(6rem, -5rem, 0)" },
    to: { transform: "translate3d(-7rem, 0, 0)" },
  },
  noise: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: "0",
    top: "0",
    pointerEvents: "none",
    zIndex: "1",

    "&:after": {
      content: '""',
      width: "calc(100% + 20rem)",
      height: "calc(100% + 20rem)",
      backgroundImage: `url(${background})`,
      backgroundPosition: "50%",
      position: "absolute",
      left: "-10rem",
      top: "-10rem",
      willChange: "transform",
      WebkitAnimation: "$noise 1s steps(2) infinite",
      animation: "$noise 1s steps(2) infinite",
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowYPos: 0,
      colorTrigger: false,
      windowH: window.innerHeight,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({ windowYPos: window.scrollY });
    console.log(this.state.windowYPos, this.state.windowH);
    if (this.state.windowYPos > this.state.windowH - 200) {
      this.setState({ colorTrigger: true });
    } else if (this.state.windowYPos < this.state.windowH) {
      this.setState({ colorTrigger: false });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <main className={classes.root}>
          <Heading colorChange={this.state.colorTrigger} />
          <Body colorChange={this.state.colorTrigger} />
          <Projects />
          <div />
          <div className={classes.noise}></div>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
