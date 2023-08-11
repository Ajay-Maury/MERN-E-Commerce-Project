import axios from "axios";
import { CONFIG } from "../../config/config";

//  Action types
export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUSCESS = "FETCH_PRODUCT_SUSCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

// Actions creator
export const fetchProductRequest = (payload) => {
  return {
    type: FETCH_PRODUCT_REQUEST,
    payload: true,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProductSuscess = (data) => {
  return {
    type: FETCH_PRODUCT_SUSCESS,
    payload: data,
  };
};

export const fetchProduct = (sort) => {
  return function (dispatch) {
    dispatch(fetchProductRequest())
    axios(`${CONFIG.BASE_URL}/products?_sort=${sort}&_page=${1}`)
      // axios(`http://localhost:5000/products?_sort=${sort}&_page=${1}`)
      .then((res) => {
        // Response data in the array of products
        // console.log(res);
        const products = res.data;
        dispatch(fetchProductSuscess(products));
      })
      .catch((error) => {
        // error message in error description
        dispatch(fetchProductFailure(error.message));
      });
  }
}