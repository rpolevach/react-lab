import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./components/Item";
import EditModal from "../modal/EditModal";

class ListInfo extends Component {
  state = {
    id: 0,
    name: "",
    desc: "",
    changeSectionIsOpen: false,
    editName: "",
    editDesc: ""
  };

  editItem = (id, name, description) => {
    this.setState({
      changeSectionIsOpen: true,
      id: id,
      editName: name,
      editDesc: description
    });
  };

  onEditItemAccepted = () => {
    const { editGood } = this.props;
    const { id, editName, editDesc } = this.state;

    editGood(id, editName, editDesc);

    this.setState({
      changeSectionIsOpen: false
    });
  };

  handleOnChangeName = ({ target: { value } }) => {
    this.setState({
      editName: value
    });
  };

  handleOnChangeDesc = ({ target: { value } }) => {
    this.setState({
      editDesc: value
    });
  };

  closeChangeSection = () => {
    this.setState({
      changeSectionIsOpen: false
    });
  };

  onCloseEditModal = () => {
    this.setState({
      changeSectionIsOpen: false
    });
  };

  render() {
    const { goods, removeGood } = this.props;
    const { editName, editDesc } = this.state;

    return (
      <div>
        <ul className="ListInfo">
          {goods.map(({ id, name, description }) => (
            <Item
              key={id}
              name={name}
              description={description}
              removeGood={removeGood}
              id={id}
              editItem={this.editItem}
              closeChangeSection={this.closeChangeSection}
            />
          ))}
        </ul>
        <EditModal
          changeSectionIsOpen={this.state.changeSectionIsOpen}
          name={editName}
          description={editDesc}
          id={goods.id}
          onEditItemAccepted={this.onEditItemAccepted}
          handleOnChangeName={this.handleOnChangeName}
          handleOnChangeDesc={this.handleOnChangeDesc}
          onCloseEditModal={this.onCloseEditModal}
        />
      </div>
    );
  }
}

ListInfo.propTypes = {
  goods: PropTypes.array,
  removeGood: PropTypes.func
};

export default ListInfo;
