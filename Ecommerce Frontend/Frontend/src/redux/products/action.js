import axios from "axios";

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

export const fetchProduct= () => {
    return function (dispatch) {
        dispatch(fetchProductRequest())
        axios(`http://localhost:5000/products`)
          .then((res) => {
            // Response data in the array of products
              console.log(res)
            const products = res.data;
            dispatch(fetchProductSuscess(products));
          })
          .catch((error) => {
            // error message in error description
              console.log(error.message)
            dispatch(fetchProductFailure(error.message));
          });
    }
}