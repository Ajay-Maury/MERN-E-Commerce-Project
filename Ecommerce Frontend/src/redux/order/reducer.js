import { ADD_ORDER_FAILURE, ADD_ORDER_REQUEST, ADD_ORDER_SUCCESS, FETCH_ORDER_REQUEST } from "./action"

const initState = {
    loading: false,
    error: false,
    orderPlaced: {},
    orderById : {},
    allOrder : []
}

export const OrderReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_ORDER_REQUEST: {
            return { ...state, loading: true }
        };
        case ADD_ORDER_FAILURE: {
            return { ...state, error: payload }
        };
        case ADD_ORDER_SUCCESS: {
            return { ...state, orderPlaced: payload }
        };
        case FETCH_ORDER_REQUEST: {
            return { ...state, loading: true }
        };
        default: return state;
            
    }
}
