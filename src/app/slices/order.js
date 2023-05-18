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
export const acceptOrder = createAsyncThunk(
  "accept/order/:id/:order_id",
  async (data, thunkAPI) => {
    try {
      const response = await OrderService.acceptOrder(thunkAPI.dispatch, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getYOrders = createAsyncThunk(
  "order/:id",
  async ({limit, id}, thunkAPI) => {
    try {
      const response = await OrderService.getYOrders(thunkAPI.dispatch, {limit, id});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getAOrders = createAsyncThunk(
  "available/order",
  async ({limit}, thunkAPI) => {
    try {
      const response = await OrderService.getAOrders(thunkAPI.dispatch, {limit});
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
    yorders: [],
    aorders: [],
    isLoading: false,
    error: "",
    boostType: 1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setYOrders: (state, action) => {
      state.yorders = action.payload;
    },
    setAOrders: (state, action) => {
      state.aorders = action.payload;
    },
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

export const { setYOrders, setAOrders, setOrders,setBoost, setLoading, setError } = actions
export default reducer;