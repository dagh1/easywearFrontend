import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";

const reducers = combineReducers({
  postSlice,
});

export default reducers;
