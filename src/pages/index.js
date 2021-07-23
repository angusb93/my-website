import React, { Component } from "react";
import "@fontsource/noto-sans-jp";

import Heading from "../components/Heading";
import Body from "../components/Body";
import Projects from "../components/Projects";
import { withStyles } from "@material-ui/core/styles";

import ReactPageScroller from "react-page-scroller";
const styles = {
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
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = (number) => {
    this.setState({ currentPage: number });
  };

  handleBeforePageChange = (number) => {
    console.log(number);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <main className={classes.root}>
          <ReactPageScroller
            pageOnChange={this.handlePageChange}
            onBeforePageScroll={this.handleBeforePageChange}
            customPageNumber={this.state.currentPage}
            animationTimer={400}
          >
            <Heading />
            <Body />
            <Projects />
          </ReactPageScroller>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
