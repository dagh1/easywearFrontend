import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import eventSlice from "./slices/eventSlice";
import products from "./reducers/productsReducer";

const reducers = combineReducers({
  products,
  postSlice,
  claimSlice,
  eventSlice
});

export default reducers;
