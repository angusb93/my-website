import React, { Component } from "react";

import Heading from "../components/Heading";
import Body from "../components/Body";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import angus from "../images/angus.png";
import "@fontsource/roboto-mono";
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
        <Footer />
        <div className={classes.noise} />
        <Helmet>
          <title>ANGUS BUICK</title>
          <meta property="og:url" content="http://www.angusbuick.com" />
          <meta property="og:title" content="Angus Buick's website" />
          <meta property="og:image" content={angus} />
        </Helmet>
      </main>
    );
  }
}

export default withStyles(styles)(App);
