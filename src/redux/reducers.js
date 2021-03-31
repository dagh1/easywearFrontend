import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import products from "./reducers/productsReducer";
const reducers = combineReducers({
  products,
  postSlice,
  claimSlice,
 
});

export default reducers;
