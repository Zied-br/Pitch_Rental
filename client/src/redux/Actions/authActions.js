import { prefixe } from "../../helpers/prefixes";
import { getBookings } from "../Actions/bookingActions";
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
} from "./types";

import axios from "axios";
import { setToken } from "../../helpers/token";
import { getAllPosts } from "./postActions";

//Login
export const login = (info) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.post(`${prefixe}/user/login`, info);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(getUserInfo());
    dispatch(getAllPosts());
    dispatch(getBookings());
  } catch (err) {
    dispatch({ type: LOGIN_FAILED, payload: err.response.data.msg });
  }
};

//Logout
export const logout = () => {
  return { type: LOGOUT };
};

//UserInformations
export const getUserInfo = () => async (dispatch) => {
  dispatch({
    type: GET_USER_INFO_REQUEST,
  });

  try {
    setToken();
    const res = await axios.get(`${prefixe}/user/userProfile`);
    dispatch({
      type: GET_USER_INFO_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_INFO_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Register
export const register = (info) => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  try {
    const res = await axios.post(`${prefixe}/user/register`, info);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(getUserInfo());
  } catch (err) {
    dispatch({
      type: REGISTER_FAILED,
      payload: err.response.data.msg,
    });
  }
};
