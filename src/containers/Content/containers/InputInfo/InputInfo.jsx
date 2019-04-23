import React, { Component } from "react";
import { connect } from "react-redux";
import { addGood, removeGood } from "../../../../actions/actionCreator";

class InputInfo extends Component {
  state = {
    name: "",
    description: ""
  };

  handleInputNameChange = ({ target: { value } }) =>
    this.setState({
      name: value
    });

  handleInputDescChange = ({ target: { value } }) =>
    this.setState({
      description: value
    });

  handleAddGood = () => {
    const { name, description } = this.state;
    const { goods, addGood } = this.props;

    const id = goods[goods.length - 1].id + 1;

    if (name.length > 1 && description.length > 5) {
      addGood(id, name, description);

      this.setState({
        name: "",
        description: ""
      });
    }
  };

  render() {
    return (
      <div>
        <input placeholder="name" onChange={this.handleInputNameChange} />
        <input
          placeholder="description"
          onChange={this.handleInputDescChange}
        />
        <button type="submit" onClick={this.handleAddGood}>
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
  { addGood, removeGood }
)(InputInfo);
