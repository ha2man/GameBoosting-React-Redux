import axios from "axios";
import { setLoading, setError } from 'app/slices/order';
const API_URL = "http://localhost:5000/api/order/";

const createOrder = (dispatch, name, email, discord, price) => {
    dispatch(setError(""));
    dispatch(setLoading(true));
    axios.post(API_URL + "create", {
      name,
      email,
      discord,
      price,
    })
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

const OrderService = {
    createOrder,
}

export default OrderService;