import { prefixe } from "../../helpers/prefixes";
import { setToken } from "../../helpers/token";
import axios from "axios";
import {
  ADD_SUBSCRIPTION_FAILED,
  ADD_SUBSCRIPTION_REQUEST,
  ADD_SUBSCRIPTION_SUCCESS,
  DELETE_SUBSCRIPTION_FAILED,
  DELETE_SUBSCRIPTION_REQUEST,
  DELETE_SUBSCRIPTION_SUCCESS,
  GET_SUBSCRIPTION_FAILED,
  GET_SUBSCRIPTION_REQUEST,
  GET_SUBSCRIPTION_SUCCESS,
} from "./types";

//Add subscription
export const addNewSubscription = (newSubscription) => async (dispatch) => {
  dispatch({
    type: ADD_SUBSCRIPTION_REQUEST,
  });

  try {
    //auth
    setToken();
    const { data } = await axios.post(
      `${prefixe}/subscribe/newSubscription`,
      newSubscription
    );
    dispatch({
      type: ADD_SUBSCRIPTION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ADD_SUBSCRIPTION_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Get subscriptions
export const getSubscriptions = () => async (dispatch) => {
  dispatch({
    type: GET_SUBSCRIPTION_REQUEST,
  });
  try {
    //auth admin
    setToken();

    const { data } = await axios.get(`${prefixe}/subscribe/getSubscriptions`);
    dispatch({
      type: GET_SUBSCRIPTION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SUBSCRIPTION_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Delete subscription
export const deleteSubscription = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_SUBSCRIPTION_REQUEST,
  });
  try {
    //auth
    setToken();

    await axios.delete(`${prefixe}/subscribe/deleteSubscription/${id}`);
    dispatch({
      type: DELETE_SUBSCRIPTION_SUCCESS,
    });
    //to update modification
    dispatch(getSubscriptions());
  } catch (err) {
    dispatch({
      type: DELETE_SUBSCRIPTION_FAILED,
      payload: err.response.data.msg,
    });
  }
};
