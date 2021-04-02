import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";

import commentSlice from "./slices/commentSlice";
import ReactionSlice from "./slices/reactionSlice";

import userSlice from "./slices/userSlice";
import products from "./reducers/productsReducer";


const reducers = combineReducers({
  products,
  postSlice,
  claimSlice,

  commentSlice,
  ReactionSlice,
  userSlice,

});

export default reducers;
