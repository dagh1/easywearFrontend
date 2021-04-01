import { combineReducers } from "redux";
import postSlice from "./slices/postSlice";
import claimSlice from "./slices/claimSlice";
import commentSlice from "./slices/commentSlice";
import ReactionSlice from "./slices/reactionSlice";

const reducers = combineReducers({
  postSlice,
  claimSlice,
  commentSlice,
  ReactionSlice,
});

export default reducers;
