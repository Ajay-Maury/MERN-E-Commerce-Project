import axios from "axios";
import { CONFIG } from "../../../config/config";

export const ADD_CART_REQUEST = "ADD_CART_REQUEST";
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const ADD_CART_FAILURE = "ADD_CART_FAILURE";

const addCartRequest = () => {
  return {
    type: ADD_CART_REQUEST,
  };
};

const addCartSuscess = (data) => {
  return {
    type: ADD_CART_SUCCESS,
    payload: data,
  };
};

const addCartFailure = (error) => {
  return {
    type: ADD_CART_FAILURE,
    payload: error,
  };
};

export const addToCart = (payload) => (dispatch) => {
  dispatch(addCartRequest());
  axios
    .post(`${CONFIG.BASE_URL}/cart/create`, payload)
    .then((response) => dispatch(addCartSuscess(response.data)))
    .catch((error) => dispatch(addCartFailure(error.message)));
};
