import React, { Component } from "react";
import "@fontsource/noto-sans-jp";

import Heading from "../components/Heading";
import Body from "../components/Body";
import Projects from "../components/Projects";
import { withStyles } from "@material-ui/core/styles";

import ReactPageScroller from "react-page-scroller";
const styles = {
  pageStyles: {
    color: "#232129",
    fontFamily: "Noto Sans JP",
    margin: "0px",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    width: "75%",
  },
  paginationAdditionalClass: {
    margin: "0",
    position: "fixed",
    top: "20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  ".pagination-additional-class > li:not(:last-of-type) > a, .pagination-additional-class > li:not(:last-of-type) > span":
    {
      marginRight: "50px",
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
        <main className={classes.pageStyles}>
          <ReactPageScroller
            pageOnChange={this.handlePageChange}
            onBeforePageScroll={this.handleBeforePageChange}
            customPageNumber={this.state.currentPage}
            animationTimer={500}
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
