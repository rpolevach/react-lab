import { ADD_GOOD } from "../constants";

export const addGood = (name, description, price) => ({
  type: ADD_GOOD,
  name,
  description,
  price
});
