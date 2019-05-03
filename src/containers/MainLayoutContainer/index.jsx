import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./containers/Header/Header";
import Content from "../Content/Content";
import { addUser } from "../../actions/actionCreator";
import "./styled/MainLayout.css";

class MainLayoutContainer extends Component {
  state = {
    isSignFormOpen: false,
    isSignUp: false,
    userName: "",
    password: ""
  };

  handleOpenSignForm = isSignUp => {
    if (isSignUp) {
      this.setState({
        isSignUp: true
      });
    } else {
      this.setState({
        isSignUp: false
      });
    }

    this.setState({
      isSignFormOpen: !this.state.isSignFormOpen
    });
  };

  render() {
    const { isSignFormOpen, isSignUp } = this.state;
    const { addUser } = this.props;

    return (
      <div className="mainLayout">
        <Header
          isSignFormOpen={isSignFormOpen}
          isSignUp={isSignUp}
          openSignForm={this.handleOpenSignForm}
          addUser={addUser}
        />
        <Content />
      </div>
    );
  }
}

export default connect(
  state => ({
    users: state.users
  }),
  { addUser }
)(MainLayoutContainer);
