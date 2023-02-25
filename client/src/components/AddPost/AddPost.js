import React, { useState } from "react";
import "../AddPost/AddPost.css";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../redux/Actions/postActions";

const AddPost = () => {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  //img reader
  const [selectedImg, setSelectedImg] = useState("");

  const handleChangeImg = (e) => {
    e.preventDefault();
    if (e.target.files.length) {
      const myImg = e.target.files[0];
      //create reader to convert img to file
      const reader = new FileReader();
      reader.readAsDataURL(myImg);
      reader.onload = () => {
        setSelectedImg(reader.result);
        setNewPost({ ...newPost, image: reader.result });
      };
    }
  };
  //add post

  const handleAddNewPost = (e) => {
    e.preventDefault();
    dispatch(addNewPost(newPost));
    setNewPost({ title: "", description: "" });
    setSelectedImg("");
  };

  return (
    <div>
      <form>
        <div className="form-outline mb-4">
          <div>
            <div className="mb-4 d-flex justify-content-center">
              <img
                alt=""
                style={{
                  width: "500px",
                  visibility: selectedImg === "" ? "hidden" : "visible",
                }}
                name="newImage"
                src={selectedImg}
              />
            </div>
            <div className="d-flex justify-content-center">
              <div className="btn btn-primary btn-rounded">
                <label
                  className="form-label text-white m-1"
                  htmlFor="customFile1"
                >
                  {selectedImg === "" ? "Add picture" : "Change it"}
                </label>

                <input
                  type="file"
                  className="form-control d-none"
                  id="customFile1"
                  onChange={handleChangeImg}
                />
              </div>
            </div>
          </div>
          <MDBInput
            type="text"
            id="form4Example1"
            className="form-control"
            label="Title"
            name="title"
            onChange={handleChange}
            value={newPost.title}
          />
        </div>

        <div className="form-outline mb-4">
          <MDBTextArea
            className="form-control"
            id="form4Example3"
            rows="4"
            label="Post Description"
            name="description"
            onChange={handleChange}
            value={newPost.description}
          ></MDBTextArea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handleAddNewPost}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
