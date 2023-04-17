import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import OrderService from "../services/order.service";

export const createOrder = createAsyncThunk(
    "order/create",
    async (data, thunkAPI) => {
      try {
        const response = await OrderService.createOrder(thunkAPI.dispatch, data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
);
export const getOrders = createAsyncThunk(
    "order",
    async ({limit}, thunkAPI) => {
      try {
        const response = await OrderService.getOrders(thunkAPI.dispatch, {limit});
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
);

const initialState = {
    orders: [],
    isLoading: false,
    error: "",
    boostType: 1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setBoost: (state, action) => {
      state.boostType = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

const { reducer, actions } = orderSlice;

export const { setOrders,setBoost, setLoading, setError } = actions
export default reducer;