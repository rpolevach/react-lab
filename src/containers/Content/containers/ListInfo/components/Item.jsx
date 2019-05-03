import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../../styled/Items.css";

const Item = ({
  id,
  name,
  description,
  removeGood,
  editItem,
  closeChangeSection
}) => (
  <li className="good-item">
    <div className="item-wrapper">
      <div className="name-section">
        <span>{name}</span>
      </div>
      <div className="description-section">
        <span>{description}</span>
      </div>
      <div className="button-group">
        <button
          onClick={() => {
            removeGood(id);
            closeChangeSection();
          }}
        >
          delete
        </button>
        <button onClick={() => editItem(id, name, description)}>edit</button>
      </div>
    </div>
  </li>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  removeGood: PropTypes.func
};

export default Item;
