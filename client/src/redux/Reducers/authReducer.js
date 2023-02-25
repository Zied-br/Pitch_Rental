import {
  GET_USER_INFO_FAILED,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../Actions/types";

const initState = {
  token: localStorage.getItem("token"),
  isAuth: Boolean(localStorage.getItem("isAuth")),
  user: JSON.parse(localStorage.getItem("user")),
  isLoading: false,
  errors: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    //Login Requests
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("isAuth", true);

      return {
        ...state,
        isAuth: true,
        token: payload.accessToken,
        errors: null,
        isLoading: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        isLoading: false,
        errors: payload,
      };
    //Logout
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        isLoading: false,
        errors: null,
      };
    //User Infos Requestes
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_INFO_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case GET_USER_INFO_FAILED:
      return {
        ...state,
        user: null,
        token: null,
        isAuth: false,
        isLoading: false,
        errors: payload,
      };
    //Register Requests
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        errors: null,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: null,
        user: null,
        errors: payload,
      };
    default:
      break;
  }

  return state;
};
export default authReducer;
