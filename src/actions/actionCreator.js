import { ADD_GOOD, REMOVE_GOOD, EDIT_GOOD, ADD_USER } from "../constants";

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

export const addUser = (username, password, isAdmin) => ({
  type: ADD_USER,
  username,
  password,
  isAdmin
});
