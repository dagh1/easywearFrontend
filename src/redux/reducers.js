import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";

import userSlice from "./slices/userSlice";

import products from "./reducers/productsReducer";

const reducers = combineReducers({
  products,
  postSlice,
  claimSlice,
  userSlice,
});

export default reducers;
