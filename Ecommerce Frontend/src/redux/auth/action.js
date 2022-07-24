import axios from "axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload,
  };
};

export const userLogin = (payload) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post(`http://localhost:5000/login`,payload)
    .then((result) => {
      dispatch(loginSuccess(result.data));
    })
    .catch((err) => {
      dispatch(loginFailure(err.data));
    });
};


