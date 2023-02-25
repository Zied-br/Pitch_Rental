import { prefixe } from "../../helpers/prefixes";
import { setToken } from "../../helpers/token";
import axios from "axios";
import {
  DELETE_MESSAGE_FAILED,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  GET_MESSAGE_FAILED,
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "./types";

//sending Message
export const sendMessage = (newMessage) => async (dispatch) => {
  dispatch({
    type: SEND_MESSAGE_REQUEST,
  });

  try {
    const { data } = await axios.post(
      `${prefixe}/contactus/sendMessage`,
      newMessage
    );
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SEND_MESSAGE_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Get Messages
export const getMessages = () => async (dispatch) => {
  dispatch({
    type: GET_MESSAGE_REQUEST,
  });
  try {
    //auth
    setToken();

    const { data } = await axios.get(`${prefixe}/contactus/getMessages`);
    dispatch({
      type: GET_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_MESSAGE_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Delete message
export const deleteMessage = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_MESSAGE_REQUEST,
  });
  try {
    //auth
    setToken();

    await axios.delete(`${prefixe}/contactus/deleteMessage/${id}`);
    dispatch({
      type: DELETE_MESSAGE_SUCCESS,
    });
    //to update modification
    dispatch(getMessages());
  } catch (err) {
    dispatch({
      type: DELETE_MESSAGE_FAILED,
      payload: err.response.data.msg,
    });
  }
};
