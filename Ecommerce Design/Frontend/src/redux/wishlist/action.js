import axios from "axios";

export const GET_WISHLIST_PRODUCTS_REQUEST = "GET_WISHLIST_PRODUCTS_REQUEST";
export const GET_WISHLIST_PRODUCTS_SUCCESS = "GET_WISHLIST_PRODUCTS_SUCCESS";
export const GET_WISHLIST_PRODUCTS_FAILURE = "GET_WISHLIST_PRODUCTS_FAILURE";


const getWishlistProductsRequest = () => {
  return {
    type: GET_WISHLIST_PRODUCTS_REQUEST,
  };
};

const getWishlistProductsSuscess = (data) => {
  return {
    type: GET_WISHLIST_PRODUCTS_SUCCESS,
    payload: data,
  };
};
const getWishlistProductsFailure = (error) => {
  return {
    type: GET_WISHLIST_PRODUCTS_FAILURE,
    payload: error,
  };
};


export const getWishlistProducts = (id) => (dispatch) => {
  dispatch(getWishlistProductsRequest());
  axios
    .get(`http://localhost:5000/wishlist/${id}`)
    .then((res) => {
      console.log(res.data,"FETCH")
      dispatch(getWishlistProductsSuscess(res.data))
    })
    .catch((err) => dispatch(getWishlistProductsFailure(err.message)));
};


