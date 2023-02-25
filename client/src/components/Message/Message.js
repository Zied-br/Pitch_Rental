import React from "react";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../redux/Actions/contactUsActions";
import "../Message/Message.css";
const Message = ({ elem }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteMessage(elem._id));
  };

  return (
    <div className="messages">
      <div className="card text-center">
        <div className="card-header">
          <h5>From : </h5>
          <h4>{elem.fullName}</h4>
        </div>

        <div className="card-body">
          <h5 className="card-title">{elem.subject}</h5>
          <p className="mailPhone">
            Email : {elem.email} <br></br> Phone Number : {elem.phoneNumber}
          </p>
          <hr />
          <p className="card-text">{elem.message}</p>
          <button
            type="submit"
            className="btn btn-danger btn-block mb-4 messagedelete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="card-footer text-muted">
          {elem.createdAt.slice(0, 7)} {elem.createdAt.slice(11, 16)}
        </div>
      </div>
    </div>
  );
};

export default Message;
