import axios from "axios";
import { setLoading, setError } from 'app/slices/auth';
const API_URL = "http://localhost:5000/api/auth/";
// const API_URL = "https://533a-45-126-3-252.ngrok-free.app/api/auth/";
const register = (dispatch, name, email, discord, password) => {
  dispatch(setError(""));
  dispatch(setLoading(true));
  axios.post(API_URL + "register", {
    name,
    email,
    discord,
    password,
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

const login = (dispatch, email, password) => {
  dispatch(setLoading(true));
  dispatch(setError(""));
  axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((res) => {
      dispatch(setLoading(false));
      if (res.data.email) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch((error) => {
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
      return error.response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  axios.post(API_URL + "logout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
