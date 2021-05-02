import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

let initialState = {
  orders: [],
  selectedOrders: {},
  errors: "",
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    populateOrder(state, action) {
      state.orders = action.payload;
    },
    selectOrder(state, action) {
      state.selectedOrders = action.payload;
    },
    unselectOrder(state) {
      state.selectedOrders = null;
    },

    updateOrder: (state, action) => {
      const payload = action.payload;
      const index = state.orders.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.orders[index] = payload;
      }
    },
    addOrder: (state, action) => {
      const payload = action.payload;
      state.orders.push(payload);
    },
    deleteOrder: (state, action) => {
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

export const fetchOrders = () => async (dispatch) => {
  const [res, error] = await queryApi("order/getOrders");

  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateOrder(res));
  }
};

export const selectOrders = (state) => {
  return [state.orderSlice.orders, state.orderSlice.errors];
};

export const selectSelectedOrders = (state) => {
  return state.orderSlice.selectedOrders;
};
export const {
  populateOrder,
  addOrder,
  deleteOrder,
  selectOrder,
  updateOrder,
  unselectOrder,
  setErrors,
} = orderSlice.actions;

export default orderSlice.reducer;
