import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../../redux/Actions/postActions";
import { Button, Modal } from "react-bootstrap";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import userImage from "../../helpers/images/user.png";
import "./Post.css";

const Post = ({ elem }) => {
  //Modal state
  const [show, setShow] = useState(false);
  //updating state
  const [updateState, setUpdateState] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setUpdateState({ ...updateState, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  //deleting dispatch
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(elem._id));
  };
  //updating dispatch
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatePost(elem._id, updateState));
    setShow(false);
    setUpdateState({ description: "", title: "" });
  };
  //authentication for delete and update icons
  const authId = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Update post form : </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBInput
            type="text"
            id="form4Example1"
            className="form-control"
            label="Title"
            name="title"
            onChange={handleChange}
          />

          <MDBTextArea
            className="form-control descriptionModal"
            id="form4Example3"
            rows="4"
            label="Post Description"
            name="description"
            onChange={handleChange}
          ></MDBTextArea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="post">
        <div className="card">
          <div className="header">
            <img
              src={elem.owner.image ? elem.owner.image.url : userImage}
              className="rounded-circle"
              alt="example placeholder"
              style={{ width: "50px" }}
            />
            <h3 className="owner">
              {elem.owner
                ? elem.owner.firstName + " " + elem.owner.lastName
                : ""}
            </h3>
            <i
              className="fas fa-trash "
              style={{
                visibility:
                  elem.owner._id === authId._id || authId.role === 1
                    ? "visible"
                    : "hidden",
              }}
              onClick={handleDelete}
            ></i>
            <i
              className="fas fa-edit "
              style={{
                visibility:
                  elem.owner._id === authId._id ? "visible" : "hidden",
              }}
              onClick={() => setShow(true)}
            ></i>
          </div>

          <img
            src={elem.image ? elem.image.url : ""}
            className="card-img"
            alt="Camera"
            style={{ display: elem.image ? true : "none" }}
          />
          <div className="card-body">
            <h5 className="card-title title">{elem.title}</h5>
            <p className="card-text">{elem.description}</p>
            <p className="card-text">
              <small className="text-muted">
                created : {elem.createdAt.slice(0, 7)}{" "}
                {elem.createdAt.slice(11, 16)}
              </small>
              {elem.updatedAt !== elem.createdAt ? (
                <small className="text-muted">
                  <br /> updated : {elem.updatedAt.slice(0, 7)}{" "}
                  {elem.updatedAt.slice(11, 16)}
                </small>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
