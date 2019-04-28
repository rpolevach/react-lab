import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./containers/Header/Header";
import Content from "../Content/Content";
import { addUser } from "../../actions/actionCreator";
import "./styled/MainLayout.css";

class MainLayoutContainer extends Component {
  state = {
    isSignUpFormOpen: false,
    userName: "",
    password: ""
  };

  handleOpenSignUpForm = () =>
    this.setState({
      isSignUpFormOpen: !this.state.isSignUpFormOpen
    });

  render() {
    const { isSignUpFormOpen } = this.state;
    const { addUser, users } = this.props;

    return (
      <div className="mainLayout">
        <Header
          isSignUpFormOpen={isSignUpFormOpen}
          openSignUpForm={this.handleOpenSignUpForm}
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
