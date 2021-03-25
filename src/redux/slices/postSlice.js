import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  posts: [],
  selectedPosts: {},
  errors: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    populatePost(state, action) {
      state.posts = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    addPost: (state, action) => {
      const payload = action.payload;
      state.posts.push(payload);
    },
  },
});

export const fetchPosts = () => async (dispatch) => {
  const [res, error] = await queryApi("post");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populatePost(res));
  }
};

export const selectPosts = (state) => {
  return [state.postSlice.posts, state.postSlice.errors];
};
export const { populatePost, addPost, setErrors } = postSlice.actions;

export default postSlice.reducer;
