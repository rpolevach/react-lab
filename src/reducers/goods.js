import { ADD_GOOD } from "../constants";
import { stat } from "fs";

const GOODS = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание первого товара"
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание второго товара"
  },
  {
    id: 3,
    name: "Товар 3",
    description: "Описание третьего товара"
  },
  {
    id: 4,
    name: "Товар 4",
    description: "Описание четвертого товара"
  }
];

const goods = (state = GOODS, { id, name, description, type }) => {
  switch (type) {
    case ADD_GOOD:
      return [
        ...state,
        {
          id,
          name,
          description
        }
      ];
    default:
      return state;
  }
};

export default goods;
