import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";

const reducers = combineReducers({
  postSlice,
  claimSlice,
});

export default reducers;
