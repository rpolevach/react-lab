import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListInfo from "./containers/ListInfo/ListInfo";
import Modal from "./containers/modal/Modal";
import { addGood, removeGood, editGood } from "../../actions/actionCreator";

class Content extends Component {
  state = {
    isOpen: false
  };

  hanleOpenAddGoodModal = isOpen => {
    if (this.state.isOpen === false) {
      isOpen = true;

      this.setState({
        isOpen: isOpen
      });
    }
  };

  handleCloseAddGoodModal = isOpen => {
    if (this.state.isOpen === true) {
      isOpen = false;

      this.setState({
        isOpen: isOpen
      });
    }
  };

  render() {
    const { goods, addGood, removeGood, editGood } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <button onClick={this.hanleOpenAddGoodModal}>Add +</button>
        <Modal
          addGood={addGood}
          goods={goods}
          isOpen={isOpen}
          onClose={this.handleCloseAddGoodModal}
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
