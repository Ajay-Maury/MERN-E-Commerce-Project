import axios from "axios";

export const REMOVE_WISHLIST_REQUEST = "REMOVE_WISHLIST_REQUEST";
export const REMOVE_WISHLIST_SUCCESS = "REMOVE_WISHLIST_SUCCESS";
export const REMOVE_WISHLIST_FAILURE = "REMOVE_WISHLIST_FAILURE";

const removeWishlistRequest = () => {
  return {
    type: REMOVE_WISHLIST_REQUEST,
  };
};

const removeWishlistSuscess = (message) => {
  return {
    type: REMOVE_WISHLIST_SUCCESS,
    payload: message,
  };
};

const removeWishlistFailure = (error) => {
  return {
    type: REMOVE_WISHLIST_FAILURE,
    payload: error,
  };
};

export const removeFromWishlist = (wishlistId,itemId) => (dispatch) => {
  dispatch(removeWishlistRequest());
  axios
    .delete(`http://localhost:5000/cart/${wishlistId}/delete/${itemId}`)
    .then((res) => dispatch(removeWishlistSuscess(res.data)))
    .catch((error) => dispatch(removeWishlistFailure(error.message)));
};
