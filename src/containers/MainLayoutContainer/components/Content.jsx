import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGood } from "../../../actions/actionCreator";

class Content extends Component {
  state = {
    name: ""
  };

  handleInputChange = ({ target: { value } }) => {
    console.log(value);
    this.setState({
      name: value
    });
  };

  handleAddGood = () => {
    const { name } = this.state;
    const { addGood } = this.props;

    addGood(name, "", "");

    this.setState({
      name: ""
    });
  };

  render() {
    const { goods } = this.props;

    return (
      <div>
        <input
          placeholder="name"
          ref={input => {
            this.trackInput = input;
          }}
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleAddGood.bind(this)}>
          Add +
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    goods: state.goods
  }),
  { addGood }
)(Content);
