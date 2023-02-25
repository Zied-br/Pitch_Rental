import Post from "../Post/Post";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/Actions/postActions";
const PostList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line
  }, []);

  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div>
      {posts.map((elem) => <Post elem={elem} key={elem._id}></Post>).reverse()}
    </div>
  );
};

export default PostList;
