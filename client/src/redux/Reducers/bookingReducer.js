import {
  ADD_NEW_BOOKING_FAILED,
  GET_BOOKINGS_FAILED,
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
  LOGOUT,
} from "../Actions/types";

const initState = {
  bookings: [],
  errors: null,
};

const bookingReducer = (state = initState, { type, payload }) => {
  switch (type) {
    //Login Requests
    case GET_BOOKINGS_REQUEST:
      return {
        ...state,
      };

    case GET_BOOKINGS_SUCCESS:
      return {
        ...state,

        bookings: payload,
        errors: null,
      };
    case GET_BOOKINGS_FAILED:
      return {
        ...state,
        errors: payload,
      };
    case LOGOUT:
      return {
        ...state,
        bookings: [],
      };
    case ADD_NEW_BOOKING_FAILED:
      return {
        ...state,
        errors: payload,
      };
    default:
      break;
  }

  return state;
};
export default bookingReducer;
