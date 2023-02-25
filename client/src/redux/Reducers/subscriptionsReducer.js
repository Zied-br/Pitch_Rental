import {
  GET_SUBSCRIPTION_FAILED,
  GET_SUBSCRIPTION_REQUEST,
  GET_SUBSCRIPTION_SUCCESS,
  LOGOUT,
} from "../Actions/types";

const initState = {
  subscriptions: [],
  errors: null,
};

const subscriptionsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SUBSCRIPTION_REQUEST:
      return {
        ...state,
      };

    case GET_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        subscriptions: payload,
        errors: null,
      };
    case GET_SUBSCRIPTION_FAILED:
      return {
        ...state,
        errors: payload,
      };
    case LOGOUT:
      return {
        ...state,
        subscriptions: [],
      };

    default:
      break;
  }

  return state;
};
export default subscriptionsReducer;
