import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import orderReducer from "./slices/order";

const reducer = {
  auth: authReducer,
  order: orderReducer,
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
