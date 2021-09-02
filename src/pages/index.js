import React, { Component } from "react";
import "@fontsource/roboto-mono";

import Heading from "../components/Heading";
import Body from "../components/Body";
import Projects from "../components/Projects";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/IndexStyles";
import { Helmet } from "react-helmet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowYPos: 0,
      colorTrigger: false,
      windowH: 0,
    };
  }
  componentDidMount() {
    this.handleWindowSizeChange(); // Set width
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleWindowSizeChange = () => {
    this.setState({ windowH: window.innerHeight });
  };
  handleScroll = () => {
    this.setState({ windowYPos: window.scrollY });
    if (this.state.windowYPos > this.state.windowH - 150) {
      this.setState({ colorTrigger: true });
    } else if (this.state.windowYPos < this.state.windowH) {
      this.setState({ colorTrigger: false });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <main
        className={this.state.colorTrigger ? classes.rootChanged : classes.root}
      >
        <Heading colorChange={this.state.colorTrigger} />
        <Body colorChange={this.state.colorTrigger} />
        <Projects colorChange={this.state.colorTrigger} />
        <div className={classes.noise} />
        <Helmet>
          <title>ANGUS BUICK</title>
        </Helmet>
      </main>
    );
  }
}

export default withStyles(styles)(App);
