import React, { Component } from "react";
import PropTypes from "prop-types";

const Item = ({
  id,
  name,
  description,
  removeGood,
  editItem,
  closeChangeSection
}) => (
  <li className="good-item">
    <span>{name}</span>
    <span>{description}</span>
    <button
      onClick={() => {
        removeGood(id);
        closeChangeSection();
      }}
    >
      delete
    </button>
    <button onClick={() => editItem(id, name, description)}>edit</button>
  </li>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removeGood: PropTypes.func
};

export default Item;
