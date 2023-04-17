import axios from "axios";
import { setOrders, setLoading, setError } from 'app/slices/order';
const API_URL = "http://localhost:5000/api/order/";
// const API_URL = "https://533a-45-126-3-252.ngrok-free.app/api/order/";
const createOrder = (dispatch, data) => {
    dispatch(setError(""));
    dispatch(setLoading(true));
    axios.post(API_URL + "create", data)
    .then(res => {
      dispatch(setLoading(false));
      return res.data;
    })
    .catch(error => {
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
      return error.response;
    });
};

const getOrders = (dispatch, {limit}) => {
  dispatch(setError(""));
  dispatch(setLoading(true));
  
  axios.get(API_URL, limit)
  .then(res => {
    dispatch(setLoading(false));
    dispatch(setOrders(res.data.orders));
    return res.data;
  })
  .catch(error => {
    dispatch(setLoading(false));
    dispatch(setError(error.response.data));
    return error.response;
  });
}

const OrderService = {
    createOrder,
    getOrders,
}

export default OrderService;