import axios from "axios";

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";

export const REMOVE_CART_ITEM_REQUEST = "REMOVE_CART_ITEM_REQUEST";
export const REMOVE_CART_ITEM_SUCCESS = "REMOVE_CART_ITEM_SUCCESS";
export const REMOVE_CART_ITEM_FAILURE = "REMOVE_CART_ITEM_FAILURE";



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

 const fetchCartData = () => {
  return function (dispatch) {
    dispatch(fetchCartRequest());
    axios(`http://localhost:5000/cart`)
      .then((response) => dispatch(fetchCartSuscess(response.data.Cart[0])))
      .catch((error) => dispatch(fetchCartFailure(error.message)));
  };
};

const removeCartItemRequest = () => {
  return {
    type: REMOVE_CART_ITEM_REQUEST,
  };
};

const removeCartItemSuscess = (data) => {
  return {
    type: REMOVE_CART_ITEM_SUCCESS,
    payload: data,
  };
};

const removeCartItemFailure = (error) => {
  return {
    type: REMOVE_CART_ITEM_FAILURE,
    payload: error,
  };
};

 const removeCartItem = (cartId, itemId) => (dispatch) => {
    console.log("cartId, itemId", cartId, itemId);
    dispatch(removeCartItemRequest());
  axios
    .delete(`http://localhost:5000/cart/${cartId}/delete/${itemId}`)
    .then((response) => dispatch(removeCartItemSuscess(response.data)))
    .catch((error) => dispatch(removeCartItemFailure(error.message)));
};

export { removeCartItem, fetchCartData};
