import { ADD_GOOD } from "../constants";

export const addGood = (id, name, description) => ({
  type: ADD_GOOD,
  id,
  name,
  description
});
