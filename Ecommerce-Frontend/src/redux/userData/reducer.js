import {
  FETCH_SINGLE_USER_FAILURE,
  FETCH_SINGLE_USER_REQUEST,
  FETCH_SINGLE_USER_SUCCESS,
  FETCH_USER_ADDRESS_FAILURE,
  FETCH_USER_ADDRESS_REQUEST,
  FETCH_USER_ADDRESS_SUCCESS,
} from "./action";

const initState = {
  loading: false,
  error: false,
  user: {},
  address: [],
};

export const UserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_SINGLE_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_SINGLE_USER_FAILURE: {
      return { ...state, error: payload };
    }
    case FETCH_SINGLE_USER_SUCCESS: {
      return { ...state, user: payload };
    }
    case FETCH_USER_ADDRESS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_USER_ADDRESS_FAILURE: {
      return { ...state, error: payload };
    }
    case FETCH_USER_ADDRESS_SUCCESS: {
      return { ...state, address: payload };
    }
    default: return state;
  }
};
