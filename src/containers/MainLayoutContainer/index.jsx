import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Content from "../Content/Content";

class MainLayoutContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default MainLayoutContainer;
