import React, { Component } from "react";
import { connect } from "react-redux";
import ListInfo from "./containers/ListInfo/ListInfo";
import InputInfo from "./containers/InputInfo/InputInfo";
import { addGood, removeGood } from "../../actions/actionCreator";

class Content extends Component {
  render() {
    const { goods, removeGood } = this.props;

    return (
      <div>
        <button>ADD +</button>
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
