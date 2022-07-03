import axios from "axios";

export const ADD_WISHLIST_REQUEST = "ADD_WISHLIST_REQUEST";
export const ADD_WISHLIST_SUCCESS = "ADD_WISHLIST_SUCCESS";
export const ADD_WISHLIST_FAILURE = "ADD_WISHLIST_FAILURE";

const addWishlistRequest = () => {
  return {
    type: ADD_WISHLIST_REQUEST,
  };
};

const addWishlistSuscess = (data) => {
  return {
    type: ADD_WISHLIST_SUCCESS,
    payload: data,
  };
};
const addWishlistFailure = (error) => {
  return {
    type: ADD_WISHLIST_FAILURE,
    payload: error,
  };
};

export const addToWishlist = (id) => (dispatch) => {
  dispatch(addWishlistRequest());
  axios
    .post("http://localhost:5000/wishlist", id)
    .then((res) => dispatch(addWishlistSuscess(res.data)))
    .catch((err) => dispatch(addWishlistFailure(err.message)));
};
