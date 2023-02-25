import "../profile/profile.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/Actions/authActions";
import AddPost from "../../components/AddPost/AddPost";
import { getAllPosts, getMyPosts } from "../../redux/Actions/postActions";
import Post from "../../components/Post/Post";
import Spinners from "../../components/Spinner/Spinners";
import userImage from "../../helpers/images/user.png";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    dispatch(getMyPosts());
    dispatch(getAllPosts());

    // eslint-disable-next-line
  }, []);

  const profile = useSelector((state) => state.authReducer.user);
  const myPosts = useSelector((state) => state.myPostsReducer.myPosts);
  const load = useSelector((state) => state.authReducer.isLoading);

  return (
    <div>
      {load && <Spinners></Spinners>}

      <div className="card cardProfile">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={profile && profile.image ? profile.image.url : userImage}
              className="card-img "
              alt="Profile"
              style={{ width: "150px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title profileTitle">
                {profile && profile.firstName} {profile && profile.lastName}{" "}
              </h5>
              <p className="card-text">
                <strong>Email :</strong> {profile && profile.email}
              </p>
              <p className="card-text">
                <strong>Phone :</strong> {profile && profile.phoneNumber}
              </p>
              <p className="card-text">
                <strong>CIN :</strong> {profile && profile.cinNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile">
        <AddPost />
      </div>
      {myPosts
        .map((elem) => <Post elem={elem} key={elem._id}></Post>)
        .reverse()}
    </div>
  );
};

export default Profile;
