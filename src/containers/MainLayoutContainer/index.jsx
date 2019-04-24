import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Content from "../Content/Content";
import "./styled/MainLayout.css";

class MainLayoutContainer extends Component {
  render() {
    return (
      <div className="mainLayout">
        <Header />
        <Content />
      </div>
    );
  }
}

export default MainLayoutContainer;
