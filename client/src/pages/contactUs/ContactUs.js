import React, { useState } from "react";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import "../contactUs/contactUs.css";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/Actions/contactUsActions";
import contactusimg from "../../helpers/images/contactus.png";

const ContactUs = () => {
  const [inputMessage, setInputMessage] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInputMessage({ ...inputMessage, [e.target.name]: e.target.value });
  };

  //sending message
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(sendMessage(inputMessage));
    setInputMessage({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="contactus">
        <h1>Contact Us</h1>
        <form
          id="form"
          className="text-center"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <MDBInput
            name="fullName"
            label="Full Name"
            v-model="fullName"
            wrapperClass="mb-4"
            onChange={handleChange}
            value={inputMessage.fullName}
          />

          <MDBInput
            name="email"
            type="email"
            label="Email address"
            v-model="email"
            wrapperClass="mb-4"
            onChange={handleChange}
            value={inputMessage.email}
          />
          <MDBInput
            name="phoneNumber"
            label="Phone Number"
            v-model="phnoeNumber"
            wrapperClass="mb-4"
            onChange={handleChange}
            value={inputMessage.phoneNumber}
          />

          <MDBInput
            name="subject"
            label="Subject"
            v-model="subject"
            wrapperClass="mb-4"
            onChange={handleChange}
            value={inputMessage.subject}
          />

          <MDBTextArea
            name="message"
            className="message"
            wrapperClass="mb-4"
            label="Message"
            onChange={handleChange}
            value={inputMessage.message}
          />

          <MDBBtn color="primary" block className="my-4" onClick={handleClick}>
            Send
          </MDBBtn>
        </form>
      </div>
      <img className="contactusimg" src={contactusimg} alt="contactusimg" />
    </div>
  );
};

export default ContactUs;
