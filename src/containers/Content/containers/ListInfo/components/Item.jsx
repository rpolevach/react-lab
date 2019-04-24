import React, { Component } from "react";
import PropTypes from "prop-types";

const Item = ({ id, name, description, removeGood, editItem }) => (
  <li className="good-item">
    <span>{name}</span>
    <span>{description}</span>
    <button onClick={() => removeGood(id)}>del</button>
    <button onClick={() => editItem(name, description)}>edit</button>
  </li>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removeGood: PropTypes.func
};

export default Item;
