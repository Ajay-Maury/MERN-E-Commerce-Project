import { REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS } from "./action"

const initState = {
    removeCartItemLoading : false,
    removeCartItemSuscess : false,
    removeCartItemError: "",
}

export const RemoveCartItemReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REMOVE_CART_ITEM_REQUEST: {
            return {
              removeCartItemLoading: true,
              removeCartItemSuscess: false,
              removeCartItemError: false,
            };
        };
        case REMOVE_CART_ITEM_FAILURE: {
            return {
                removeCartItemLoading: false,
                removeCartItemSuscess: false,
                removeCartItemError: payload,
            };
        };
        case REMOVE_CART_ITEM_SUCCESS: {
            return {
              removeCartItemLoading: false,
              removeCartItemSuscess: true,
              removeCartItemError: false,
            };
        };
        default: {
            return state
            }
    }
}