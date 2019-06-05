import React, { Component } from "react";
import { connect } from "react-redux";
import ListInfo from "./containers/ListInfo/ListInfo";
import Modal from "./containers/modal/Modal";
import { addGood, removeGood, editGood } from "../../actions/actionCreator";
import "./styled/Content.css";

class Content extends Component {
  state = {
    name: "",
    description: "",
    isOpen: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddGood = () => {
    const { name, description } = this.state;
    const { addGood, goods } = this.props;

    const id = goods[goods.length - 1].id + 1;

    if (name.length > 1 && description.length > 5) {
      addGood(id, name, description);

      this.setState({
        name: "",
        description: "",
        isOpen: false
      });
    }
  };

  onOpen = () => this.setState({ isOpen: true });

  onClose = () => this.setState({ isOpen: false });

  render() {
    const { goods, removeGood, editGood } = this.props;

    const modal = this.state.isOpen && (
      <Modal
        onClose={this.onClose}
        onChange={this.onChange}
        onAddGood={this.onAddGood}
        isOpen={this.state.isOpen}
      />
    );

    const auth = this.props.isAuth && (
      <div>
        <button id="createGoodButton" onClick={this.onOpen}>
          Add +
        </button>
      </div>
    );

    return (
      <div className="Content-section">
        {auth}
        {modal}
        <ListInfo
          goods={goods}
          removeGood={removeGood}
          editGood={editGood}
          isAuth={this.props.isAuth}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    goods: state.goods
  }),
  { addGood, removeGood, editGood }
)(Content);
