import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

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
