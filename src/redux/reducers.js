import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import eventSlice from "./slices/eventSlice";

const reducers = combineReducers({
  postSlice,
  claimSlice,
  eventSlice
});

export default reducers;
