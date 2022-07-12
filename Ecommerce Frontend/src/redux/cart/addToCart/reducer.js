import { ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS } from "./action";

const initState = {
  AddCartLoading: false,
  AddCartError: "",
  AddCartSuscess: false,
};

export const AddToCartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CART_REQUEST: {
      return {
        AddCartLoading: true,
        AddCartError: false,
        AddCartSuscess: false,
      };
    }
    case ADD_CART_FAILURE: {
      return {
        AddCartError: payload,
        AddCartLoading: false,
        AddCartSuscess: false,
      };
    }
    case ADD_CART_SUCCESS: {
      return {
        AddCartError: false,
        AddCartSuscess: true,
        AddCartLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
