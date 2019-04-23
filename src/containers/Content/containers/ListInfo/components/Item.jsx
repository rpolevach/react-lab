import React, { Component } from "react";
import PropTypes from "prop-types";

const Item = ({ id, name, description, removeGood }) => (
    <li className="good-item">
        <span>{name}</span>
        <span>{description}</span>
        <button onClick={() => removeGood(id)}>del</button>
    </li>
)

export default Item;
