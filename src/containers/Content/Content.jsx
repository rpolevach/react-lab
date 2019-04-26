import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListInfo from "./containers/ListInfo/ListInfo";
import Modal from "./containers/modal/Modal";
import { addGood, removeGood, editGood } from "../../actions/actionCreator";
import "./styled/Content.css";

class Content extends Component {
  state = {
    isOpen: false,
    name: "",
    description: ""
  };

  hanleOpenAddGoodModal = isOpen => {
    if (this.state.isOpen === false) {
      isOpen = true;

      this.setState({
        isOpen: isOpen
      });
    }
  };

  handleInputNameChange = ({ target: { value } }) =>
    this.setState({
      name: value
    });

  handleInputDescChange = ({ target: { value } }) =>
    this.setState({
      description: value
    });

  handleCloseAddGoodModal = isOpen => {
    if (this.state.isOpen === true) {
      isOpen = false;

      this.setState({
        isOpen: isOpen
      });
    }
  };

  handleAddGood = ({ key }) => {
    console.log(this.props.state);
    const { name, description } = this.state;
    const { goods, addGood } = this.props;
    let id = 1;

    if (goods.length != 0) {
      id = goods[goods.length - 1].id + 1;
    }

    if (name.length > 1 && description.length > 5 && key === "Enter") {
      addGood(id, name, description);

      this.setState({
        name: "",
        description: "",
        isOpen: false
      });
    }
  };

  render() {
    const { goods, addGood, removeGood, editGood } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="Content-section">
        <button id="createGoodButton" onClick={this.hanleOpenAddGoodModal}>
          Add +
        </button>
        <Modal
          addGood={addGood}
          goods={goods}
          isOpen={isOpen}
          onClose={this.handleCloseAddGoodModal}
          handleInputNameChange={this.handleInputNameChange}
          handleInputDescChange={this.handleInputDescChange}
          handleAddGood={this.handleAddGood}
        />
        <ListInfo goods={goods} removeGood={removeGood} editGood={editGood} />
      </div>
    );
  }
}

Content.propTypes = {
  goods: PropTypes.array,
  addGood: PropTypes.func,
  removeGood: PropTypes.func
};

export default connect(
  state => ({
    goods: state.goods
  }),
  { addGood, removeGood, editGood }
)(Content);
