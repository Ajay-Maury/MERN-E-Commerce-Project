import axios from "axios";
import { CONFIG } from "../../config/config";

export const FETCH_SINGLE_USER_REQUEST = "FETCH_SINGLE_USER_REQUEST";
export const FETCH_SINGLE_USER_SUCCESS = "FETCH_SINGLE_USER_SUCCESS";
export const FETCH_SINGLE_USER_FAILURE = "FETCH_SINGLE_USER_FAILURE";

export const FETCH_USER_ADDRESS_REQUEST = "FETCH_USER_ADDRESS_REQUEST";
export const FETCH_USER_ADDRESS_SUCCESS = "FETCH_USER_ADDRESS_SUCCESS";
export const FETCH_USER_ADDRESS_FAILURE = "FETCH_USER_ADDRESS_FAILURE";

const fetchSingleUserRequest = () => {
  return {
    type: FETCH_SINGLE_USER_REQUEST,
  };
};

const fetchSingleUserFailure = (error) => {
  return {
    type: FETCH_SINGLE_USER_FAILURE,
    payload: error,
  };
};

const fetchSingleUserSuscess = (data) => {
  return {
    type: FETCH_SINGLE_USER_SUCCESS,
    payload: data,
  };
};

export const fetchSingleUserData = (userId) => (dispatch) => {
  dispatch(fetchSingleUserRequest());
  axios(`${CONFIG.BASE_URL}/user/${userId}`)
    .then((response) => {
      dispatch(fetchSingleUserSuscess(response.data));
    })
    .catch((error) => {
      dispatch(fetchSingleUserFailure(error.message));
    });
};

const fetchAddressRequest = () => {
  return {
    type: FETCH_USER_ADDRESS_REQUEST,
  };
};

const fetchAddressFailure = (error) => {
  return {
    type: FETCH_USER_ADDRESS_FAILURE,
    payload: error,
  };
};

const fetchAddressSuscess = (data) => {
  return {
    type: FETCH_USER_ADDRESS_SUCCESS,
    payload: data,
  };
};

export const fetchSingleUserAddress = (userId) => (dispatch) => {
  dispatch(fetchAddressRequest());
  axios(`${CONFIG.BASE_URL}/user/${userId}/address`)
    .then((response) => {
      dispatch(fetchAddressSuscess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAddressFailure(error.message));
    });
};
