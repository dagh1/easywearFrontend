import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  orders: [],
  selectedorders: {},
  errors: "",
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    populateorder(state, action) {
      state.orders = action.payload;
    },
    selectorder(state, action) {
      state.selectedorders = action.payload;
    },
    unselectorder(state) {
      state.selectedorders = null;
    },

    updateorder: (state, action) => {
      const payload = action.payload;
      const index = state.orders.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.orders[index] = payload;
      }
    },
    addorder: (state, action) => {
      const payload = action.payload;
      state.orders.push(payload);
    },
    deleteorder: (state, action) => {
      const payload = action.payload;
      const index = state.orders.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.orders.splice(index, 1);
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchorders = () => async (dispatch) => {
  const [res, error] = await queryApi("order/getOrders");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateorder(res));
  }
};

export const selectorders = (state) => {
  return [state.orderSlice.orders, state.orderSlice.errors];
};

export const selectSelectedorders = (state) => {
  return state.orderSlice.selectedorders;
};
export const {
  populateorder,
  addorder,
  deleteorder,
  selectorder,
  updateorder,
  unselectorder,
  setErrors,
} = orderSlice.actions;

export default orderSlice.reducer;
