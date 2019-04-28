import { combineReducers } from "redux";
import goods from "./goods";
import users from "./users";

const rootReducer = combineReducers({ goods, users });

export default rootReducer;
