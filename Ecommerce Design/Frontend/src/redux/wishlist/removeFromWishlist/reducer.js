import {
  REMOVE_WISHLIST_FAILURE,
  REMOVE_WISHLIST_REQUEST,
  REMOVE_WISHLIST_SUCCESS,
} from "./action";

const initState = {
  removeWishlistItemLoading: false,
  removeWishlistItemSuscess: false,
  removeWishlistItemError: "",
};

export const removeWishlistItemReducer = (
  state = initState,
  { type, payload }
) => {
  switch (type) {
    case REMOVE_WISHLIST_REQUEST: {
      return {
        removeWishlistItemLoading: true,
        removeWishlistItemSuscess: false,
        removeWishlistItemError: false,
      };
    }
    case REMOVE_WISHLIST_FAILURE: {
      return {
        removeWishlistItemLoading: false,
        removeWishlistItemSuscess: false,
        removeWishlistItemError: payload,
      };
    }
    case REMOVE_WISHLIST_SUCCESS: {
      return {
        removeWishlistItemLoading: false,
        removeWishlistItemSuscess: true,
        removeWishlistItemError: false,
      };
    }
    default: {
      return state;
    }
  }
};
