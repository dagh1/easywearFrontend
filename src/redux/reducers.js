import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import commentSlice from "./slices/commentSlice";
import ReactionSlice from "./slices/reactionSlice";

import products from "./reducers/productsReducer";
const reducers = combineReducers({
  products,
  postSlice,
  claimSlice,
  commentSlice,
  ReactionSlice,
});

export default reducers;
