import { ADD_GOOD, REMOVE_GOOD } from "../constants";

export const addGood = (id, name, description) => ({
  type: ADD_GOOD,
  id,
  name,
  description
});

export const removeGood = id => ({
  type: REMOVE_GOOD,
  id
});
