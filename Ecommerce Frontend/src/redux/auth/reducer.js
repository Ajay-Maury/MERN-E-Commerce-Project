import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./action";


const initState = {
  auth: false,
    token: "",
  user:{},
  error: false,
};

export const AuthReducer = (state = initState, {type,payload}) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        auth: false,
        token: "",
        error: false,
      };
    case USER_LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        auth: true,
          token: payload.token,
        user:payload.user,
        error: false,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        auth: false,
        token: "",
        error: true,
      };
    default:
      return state;
  }
};

