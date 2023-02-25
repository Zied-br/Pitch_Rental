import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/Actions/contactUsActions";
import Message from "../../components/Message/Message";
import "../messageBox/MessagesBox.css";

const MessageBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
    // eslint-disable-next-line
  }, []);

  const messages = useSelector((state) => state.messagesReducer.messages);

  return (
    <div>
      <h1>Messages Box</h1>
      {messages
        .map((elem) => <Message elem={elem} key={elem._id}></Message>)
        .reverse()}
    </div>
  );
};

export default MessageBox;
