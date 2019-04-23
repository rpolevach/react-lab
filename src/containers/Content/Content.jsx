import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListInfo from './containers/ListInfo/ListInfo';
import { addGood, removeGood } from "../../actions/actionCreator";

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

    const id = goods[goods.length - 1].id + 1;
    console.log("name", name);

    if (name.length > 1 && description.length > 5) {
      addGood(id, name, description);

      this.setState({
        name: "",
        description: ""
      });
    }
  };

  render() {
    const { goods, removeGood } = this.props;

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
        <ListInfo goods={goods} removeGood={removeGood}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    goods: state.goods
  }),
  { addGood, removeGood }
)(Content);
