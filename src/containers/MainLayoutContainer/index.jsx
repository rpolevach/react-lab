import React, { Component } from "react";
import Header from "./containers/Header/Header";
import Content from "../Content/Content";
import "./styled/MainLayout.css";

class MainLayoutContainer extends Component {
  state = {
    isAuth: false
  };

  onAuth = () => this.setState({ isAuth: !this.state.isAuth });

  render() {
    return (
      <div className="mainLayout">
        <Header onAuth={this.onAuth} isAuth={this.state.isAuth} />
        <Content isAuth={this.state.isAuth} />
      </div>
    );
  }
}

export default MainLayoutContainer;
