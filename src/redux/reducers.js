import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import contactSlice from "./slices/contactSlice";

const reducers = combineReducers({
  postSlice,
  claimSlice,
  contactSlice,
});

export default reducers;
