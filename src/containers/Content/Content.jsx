import React, { Component } from "react";
import { connect } from "react-redux";
import ListInfo from "./containers/ListInfo/ListInfo";
import Modal from "./containers/modal/Modal";
import { addGood, removeGood } from "../../actions/actionCreator";

class Content extends Component {
  render() {
    const { goods, addGood, removeGood } = this.props;

    return (
      <div>
        <Modal addGood={addGood} goods={goods} />
        <ListInfo goods={goods} removeGood={removeGood} />
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
