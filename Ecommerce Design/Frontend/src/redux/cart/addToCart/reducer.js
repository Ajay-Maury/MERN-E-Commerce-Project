import { ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS } from "./action";

const initState = {
    AddingCartLoading: false,
    AddingCartError: '',
    AddingCartSuscess: false,
}

export const AddToCartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_CART_REQUEST: {
            return {}
        };
        case ADD_CART_FAILURE: {
            return {}
        };
        case ADD_CART_SUCCESS: {
            return {}
        };
        default: {
            return state 
        };
    }
}