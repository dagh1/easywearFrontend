import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  claims: [],
  selectedPosts: {},
  errors: "",
};

const claimSlice = createSlice({
  name: "claims",
  initialState,
  reducers: {
    populateclaim(state, action) {
      state.claims = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    addClaim: (state, action) => {
      const payload = action.payload;
      state.claims.push(payload);
    },
  },
});

export const fetchClaims = () => async (dispatch) => {
  const [res, error] = await queryApi("claim/findAll");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateclaim(res));
  }
};

export const selectClaims = (state) => {
  return [state.claimSlice.claims, state.claimSlice.errors];
};
export const { populateclaim, setErrors, addClaim } = claimSlice.actions;

export default claimSlice.reducer;
