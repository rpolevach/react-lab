import { ADD_USER } from "../constants";

const USERS = [
  {
    userName: "Roman",
    password: "admin",
    isAdmin: "true"
  },
  {
    userName: "Qwe",
    password: "student",
    isAdmin: "false"
  }
];

const users = (state = USERS, { username, password, isAdmin, type }) => {
  switch (type) {
    case ADD_USER:
      return [
        ...state,
        {
          username,
          password,
          isAdmin
        }
      ];
    default:
      return state;
  }
};

export default users;
