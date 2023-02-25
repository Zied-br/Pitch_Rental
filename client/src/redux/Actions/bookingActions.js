import axios from "axios";
import { prefixe } from "../../helpers/prefixes";
import { setToken } from "../../helpers/token";
import {
  ADD_NEW_BOOKING_FAILED,
  ADD_NEW_BOOKING_REQUEST,
  ADD_NEW_BOOKING_SUCCESS,
  DELETE_BOOKINGS_FAILED,
  DELETE_BOOKINGS_REQUEST,
  DELETE_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILED,
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
  UPDATE_BOOKINGS_FAILED,
  UPDATE_BOOKINGS_REQUEST,
  UPDATE_BOOKINGS_SUCCESS,
} from "./types";

//Adding bookings
export const addNewBooking = (newBooking) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_BOOKING_REQUEST,
  });

  try {
    setToken();
    const { data } = await axios.post(
      `${prefixe}/booking/addNewBooking`,
      newBooking
    );
    dispatch({
      type: ADD_NEW_BOOKING_SUCCESS,
      payload: data,
    });
    //to update modification
    dispatch(getBookings());
  } catch (err) {
    dispatch({
      type: ADD_NEW_BOOKING_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Getting Bookings
export const getBookings = () => async (dispatch) => {
  dispatch({
    type: GET_BOOKINGS_REQUEST,
  });
  try {
    //auth
    setToken();

    const { data } = await axios.get(`${prefixe}/booking/allBookings`);
    dispatch({
      type: GET_BOOKINGS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_BOOKINGS_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Delete booking
export const deletebooking = (squadName) => async (dispatch) => {
  dispatch({
    type: DELETE_BOOKINGS_REQUEST,
  });
  try {
    //auth
    setToken();

    await axios.delete(`${prefixe}/booking/deleteBooking/${squadName}`);
    dispatch({
      type: DELETE_BOOKINGS_SUCCESS,
    });
    //to update modification
    dispatch(getBookings());
  } catch (err) {
    dispatch({
      type: DELETE_BOOKINGS_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//update Booking
export const updateBooking =
  (squadName, updatedBooking) => async (dispatch) => {
    dispatch({
      type: UPDATE_BOOKINGS_REQUEST,
    });

    try {
      setToken();
      const { data } = await axios.put(
        `${prefixe}/booking/updateBooking/${squadName}`,
        updatedBooking
      );
      dispatch({
        type: UPDATE_BOOKINGS_SUCCESS,
        payload: data,
      });
      //to update modification
      dispatch(getBookings());
    } catch (err) {
      dispatch({
        type: UPDATE_BOOKINGS_FAILED,
        payload: err.response.data.msg,
      });
    }
  };
