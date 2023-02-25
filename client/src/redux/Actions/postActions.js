import { setToken } from "../../helpers/token";
import {
  ADD_NEW_POST_FAILED,
  ADD_NEW_POST_REQUEST,
  ADD_NEW_POST_SUCCESS,
  DELETE_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_MY_POSTS_FAILED,
  GET_MY_POSTS_REQUEST,
  GET_MY_POSTS_SUCCESS,
  GET_POST_FAILED,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  UPDATE_POST_FAILED,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "./types";
import axios from "axios";
import { prefixe } from "../../helpers/prefixes";

//Adding posts
export const addNewPost = (newPost) => async (dispatch) => {
  dispatch({
    type: ADD_NEW_POST_REQUEST,
  });

  try {
    setToken();
    const { data } = await axios.post(`${prefixe}/post/addNewPost`, newPost);
    dispatch({
      type: ADD_NEW_POST_SUCCESS,
      payload: data,
    });
    //to update modification
    dispatch(getMyPosts());
  } catch (err) {
    dispatch({
      type: ADD_NEW_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Get All Posts
export const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POST_REQUEST,
  });
  try {
    //auth
    setToken();

    const { data } = await axios.get(`${prefixe}/post/AllPost`);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Delete post
export const deletePost = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_POST_REQUEST,
  });
  try {
    //auth
    setToken();

    await axios.delete(`${prefixe}/post/deletePost/${id}`);
    dispatch({
      type: DELETE_POST_SUCCESS,
    });
    //to update modification
    dispatch(getAllPosts());
    dispatch(getMyPosts());
  } catch (err) {
    dispatch({
      type: DELETE_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//Getting my Posts
export const getMyPosts = () => async (dispatch) => {
  dispatch({
    type: GET_MY_POSTS_REQUEST,
  });
  try {
    //auth
    setToken();

    const { data } = await axios.get(`${prefixe}/post/myPost`);
    dispatch({
      type: GET_MY_POSTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_MY_POSTS_FAILED,
      payload: err.response.data.msg,
    });
  }
};

//update Posts
export const updatePost = (id, updatedPost) => async (dispatch) => {
  dispatch({
    type: UPDATE_POST_REQUEST,
  });

  try {
    setToken();
    const { data } = await axios.put(
      `${prefixe}/post/updatePost/${id}`,
      updatedPost
    );
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: data,
    });
    //to update modification
    dispatch(getMyPosts());
    dispatch(getAllPosts());
  } catch (err) {
    dispatch({
      type: UPDATE_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};
