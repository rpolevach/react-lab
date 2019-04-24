import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./components/Item";
import EditModal from "../modal/EditModal";

class ListInfo extends Component {
  state = {
    id: 0,
    editName: "",
    editDesc: "",
    changeSectionIsOpen: false
  };

  editItem = (name, description) => {
    this.setState({
      changeSectionIsOpen: true,
      editName: name,
      editDesc: description
    });

    console.log(this.state);
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
            />
          ))}
        </ul>
        <EditModal
          changeSectionIsOpen={this.state.changeSectionIsOpen}
          name={editName}
          description={editDesc}
          id={goods.id}
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
