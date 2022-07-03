import {
  GET_WISHLIST_PRODUCTS_FAILURE,
  GET_WISHLIST_PRODUCTS_REQUEST,
  GET_WISHLIST_PRODUCTS_SUCCESS,
} from "./action";

const initState = {
  loading: false,
  error: "",
  data: [],
};

export const WishlistReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_WISHLIST_PRODUCTS_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case GET_WISHLIST_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, error: false, data: payload };
    }
    case GET_WISHLIST_PRODUCTS_FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    default: {
      return state;
    }
  }
};
