import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGood } from "../../../actions/actionCreator";

class Content extends Component {
  state = {
    name: "",
    description: ""
  };

  handleInputNameChange = ({ target: { value } }) => {
    this.setState({
      name: value
    });
  };

  handleInputDescChange = ({ target: { value } }) => {
    this.setState({
      description: value
    });
  };

  handleAddGood = () => {
    const { name, description } = this.state;
    const { addGood, goods } = this.props;

    console.log(goods.length);

    const id = goods[goods.length - 1].id + 1;
    console.log(id);

    addGood(id, name, description);

    this.setState({
      name: ""
    });
  };

  render() {
    const { goods } = this.props;

    return (
      <div>
        <input placeholder="name" onChange={this.handleInputNameChange} />
        <input
          placeholder="description"
          onChange={this.handleInputDescChange}
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
