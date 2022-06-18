import { FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS } from "./action";

const initState = {
    loading: false,
    error: "",
    data: [],
}

export const CartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_CART_REQUEST: {
            return { ...state, loading: true, error: false }
        };
        case FETCH_CART_SUCCESS: {
            return { ...state, loading: false, error: false, data: payload }
        };
        case FETCH_CART_FAILURE: {
            return { ...state, loading: false, error: payload }
        };
        default: {
            return state
        };
            
    }
};