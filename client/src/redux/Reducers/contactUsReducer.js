import {
  GET_MESSAGE_FAILED,
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  LOGOUT,
} from "../Actions/types";

const initState = {
  messages: [],

  errors: null,
};

const messagesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_MESSAGE_REQUEST:
      return {
        ...state,
      };

    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: payload,
        errors: null,
      };
    case GET_MESSAGE_FAILED:
      return {
        ...state,
        errors: payload,
      };
    case LOGOUT:
      return {
        ...state,
        messsages: [],
      };

    default:
      break;
  }

  return state;
};
export default messagesReducer;
