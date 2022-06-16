import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUSCESS,
} from "./action";

const initState = {
    loading: false,
    error: "",
    products : []
}


export const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case FETCH_PRODUCT_REQUEST: {
        return { ...state, loading: true ,error:false};
      }
      case FETCH_PRODUCT_FAILURE: {
        return { ...state, error: payload,loading:false };
      }
      case FETCH_PRODUCT_SUSCESS: {
        return { ...state, products : payload,error:false,loading:false };
      }
      default: {
        return state;
      }
    }
}