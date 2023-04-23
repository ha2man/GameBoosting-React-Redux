import axios from "axios";
import { setYOrders, setOrders, setLoading, setError } from 'app/slices/order';
// const API_URL = "http://localhost:5000/api/order/";
const API_URL = "https://relatedboost-g8pf2.ondigitalocean.app/api/order/";
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

const getYOrders = (dispatch, {limit, id}) => {
  dispatch(setError(""));
  dispatch(setLoading(true));
  
  axios.get(API_URL+`${id}`, limit)
  .then(res => {
    dispatch(setLoading(false));
    dispatch(setYOrders(res.data.orders));
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
    getYOrders,
    getOrders,
}

export default OrderService;