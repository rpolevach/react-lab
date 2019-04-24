import { ADD_GOOD, REMOVE_GOOD, EDIT_GOOD } from "../constants";

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

export const editGood = (id, name, description) => ({
  type: EDIT_GOOD,
  id,
  name,
  description
});
