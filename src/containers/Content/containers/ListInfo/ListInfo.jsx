import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./components/Item";

const ListInfo = ({ goods, removeGood }) => (
  <ul className="ListInfo">
    {goods.map(({ id, name, description }) => (
      <Item
        key={id}
        name={name}
        description={description}
        removeGood={removeGood}
        id={id}
      />
    ))}
  </ul>
);

export default ListInfo;
