import axios from "axios";
import { CONFIG } from "../../config/config";

export const GET_SINGLE_PRODUCT_REQUEST = "GET_SINGLE_PRODUCT_REQUEST";

export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS";

export const GET_SINGLE_PRODUCT_FAILURE = "GET_SINGLE_PRODUCT_FAILURE";


const getSingleProductRequest = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_REQUEST,
  };
}

const getSingleProductSusces = (data) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload: data
  }
}

const getSingleProductFailure = (error) => {
  return {
    type: GET_SINGLE_PRODUCT_FAILURE,
    payload: error
  }
}

export const fetchProductById = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios(`${CONFIG.BASE_URL}/products/${id}`).then(response => {
    dispatch(getSingleProductSusces(response.data))
  }).catch(error => {
    dispatch(getSingleProductFailure(error.message))
  });

}