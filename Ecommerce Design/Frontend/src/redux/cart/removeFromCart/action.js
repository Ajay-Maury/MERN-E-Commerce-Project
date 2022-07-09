import axios from "axios";

export const REMOVE_CART_ITEM_REQUEST = "REMOVE_CART_ITEM_REQUEST";
export const REMOVE_CART_ITEM_SUCCESS = "REMOVE_CART_ITEM_SUCCESS";
export const REMOVE_CART_ITEM_FAILURE = "REMOVE_CART_ITEM_FAILURE";

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

export const getremoveCartItem = (cartId, itemId) => (dispatch) => {
  console.log("cartId, itemId", cartId, itemId);
  dispatch(removeCartItemRequest());
  axios
    .delete(`http://localhost:5000/cart/${cartId}/delete/${itemId}`)
    .then((response) => dispatch(removeCartItemSuscess(response.data)))
    .catch((error) => dispatch(removeCartItemFailure(error.message)));
};