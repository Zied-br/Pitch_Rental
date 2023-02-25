import {
  GET_POST_FAILED,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  LOGOUT,
} from "../Actions/types";

const initState = {
  posts: [],
  isLoading: false,
  errors: null,
};

const postReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
        errors: null,
      };
    case GET_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case LOGOUT:
      return {
        ...state,
        posts: [],
      };

    default:
      break;
  }

  return state;
};
export default postReducer;
