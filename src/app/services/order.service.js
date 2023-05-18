import axios from "axios";
import { setYOrders, setAOrders, setOrders, setLoading, setError } from 'app/slices/order';
// const API_URL = "http://localhost:5000/api/";
const API_URL = "https://relatedboost-g8pf2.ondigitalocean.app/api/";
const createOrder = (dispatch, data) => {
    dispatch(setError(""));
    dispatch(setLoading(true));
    axios.post(API_URL + "order/create", data)
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

const acceptOrder = (dispatch, {id, order_id}) => {
  dispatch(setError(""));
  dispatch(setLoading(true));

  axios.post(API_URL+'accept/order'+`/${id}`+`/${order_id}`)
  .then(res => {
    dispatch(setLoading(false));
    dispatch(setAOrders(res.data.orders));
    return res.data;
  })
  .catch(error => {
    dispatch(setLoading(false));
    dispatch(setError(error.response.data));
    return error.response;
  });
}

const getOrders = (dispatch, {limit}) => {
  dispatch(setError(""));
  dispatch(setLoading(true));
  
  axios.get(API_URL+'order', limit)
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
  
  axios.get(API_URL+`order/${id}`, limit)
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

const getAOrders = (dispatch, {limit}) => {
  dispatch(setError(""));
  dispatch(setLoading(true));
  
  axios.get(API_URL+'available/order', limit)
  .then(res => {
    dispatch(setLoading(false));
    dispatch(setAOrders(res.data.orders));
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
    getAOrders,
    getOrders,
    acceptOrder,
}

export default OrderService;