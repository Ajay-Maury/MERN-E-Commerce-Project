import { ADD_WISHLIST_FAILURE, ADD_WISHLIST_REQUEST, ADD_WISHLIST_SUCCESS } from "./action";


const initState = {
  AddWishListLoading: false,
  AddWishListError: "",
  AddWishListSuscess: false,
};

export const AddToWishListReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_WISHLIST_REQUEST: {
      return {
        AddWishListLoading: true,
        AddWishListError: false,
        AddWishListSuscess: false,
      };
    }
    case ADD_WISHLIST_SUCCESS: {
      return {
          AddWishListError: false,
          AddWishListSuscess: true,
          AddWishListLoading: false,
    };
}
case ADD_WISHLIST_FAILURE: {
    return {
          AddWishListError: payload,
          AddWishListLoading: false,
          AddWishListSuscess: false,
      };
    }
    default: {
      return state;
    }
  }
};
