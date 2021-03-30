import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import userSlice from "./slices/userSlice";

const reducers = combineReducers({
  postSlice,
  claimSlice,
  userSlice,
});

export default reducers;
