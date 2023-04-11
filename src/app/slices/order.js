import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import OrderService from "../services/order.service";

export const createOrder = createAsyncThunk(
    "order/create",
    async ({ name, email, discord, price }, thunkAPI) => {
      try {
        const response = await OrderService.createOrder(thunkAPI.dispatch, name, email, discord, price);
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue();
      }
    }
);

const initialState = {
    isLoading: false,
    error: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

const { reducer, actions } = orderSlice;

export const { setLoading, setError } = actions
export default reducer;