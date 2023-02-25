import {
  GET_MY_POSTS_FAILED,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
  LOGOUT,
} from "../Actions/types";

const initState = {
  myPosts: [],
  errors: null,
};

const myPostsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MY_POSTS_REQUEST:
      return {
        ...state,
      };

    case GET_MY_POSTS_SUCCESS:
      return {
        ...state,
        myPosts: payload,
        errors: null,
      };
    case GET_MY_POSTS_FAILED:
      return {
        ...state,
        errors: payload,
      };
    case LOGOUT:
      return {
        ...state,
        myPosts: [],
      };

    default:
      break;
  }

  return state;
};
export default myPostsReducer;
