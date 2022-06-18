import axios from "axios";

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";




const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST,
  };
};

const fetchCartSuscess = (data) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: data,
  };
};

const fetchCartFailure = (error) => {
  return {
    type: FETCH_CART_FAILURE,
    payload: error,
  };
};

export const fetchCartData = () => {
  return function (dispatch) {
    dispatch(fetchCartRequest());
    axios(`http://localhost:5000/cart`)
      .then((response) => dispatch(fetchCartSuscess(response.data.Cart[0])))
      .catch((error) => dispatch(fetchCartFailure(error.message)));
  };
};


