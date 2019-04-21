import { ADD_GOOD } from "../constants";

const GOODS = [
  {
    name: "TV",
    description: "Good TV",
    price: "100$"
  }
];

const goods = (state = GOODS, { name, description, price, type }) => {
  switch (type) {
    case ADD_GOOD:
      return [
        ...state,
        {
          name,
          description,
          price
        }
      ];
    default:
      return state;
  }
};

export default goods;
