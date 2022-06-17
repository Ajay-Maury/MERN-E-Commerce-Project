import { GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./action"

const initState = {
    loading: false,
    error: "",
    product : {}
}

export const SingleProductReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_SINGLE_PRODUCT_REQUEST: {
            return {...state,loading:true,error:false}
        };
        case GET_SINGLE_PRODUCT_SUCCESS: {
            return {...state,loading:false,error:false,product:payload}
        };
        case GET_SINGLE_PRODUCT_FAILURE: {
            return {...state,loading:false,error:payload}
        };
        default: {
            return state
            }
    }
}