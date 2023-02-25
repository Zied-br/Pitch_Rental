import React, { useState } from "react";
import "../subscribe/Subscribe.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewSubscription } from "../../redux/Actions/subscriptionAction";
import subscribeImage from "../../helpers/images/subscribe.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Subscribe = () => {
  //selecting user
  const user = useSelector((state) => state.authReducer.user);

  const [newSubscription, setNewSubscription] = useState({
    fullName: user ? user.lastName + " " + user.firstName : null,
    email: user ? user.email : null,
    phoneNumber: user ? user.phoneNumber : null,
    type: "",
    code: uuidv4(),
  });

  //changing type value
  const handleChange = (e) => {
    e.preventDefault();
    setNewSubscription({ ...newSubscription, [e.target.name]: e.target.value });
  };

  //adding subscription
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addNewSubscription(newSubscription));
    setNewSubscription({ ...newSubscription, type: "" });
  };

  return (
    <div>
      <div className="subscribepage">
        <InputGroup className="subscribeInput">
          <Form.Select
            aria-label="Select"
            onChange={handleChange}
            name="type"
            value={newSubscription.type}
          >
            <option>Select Type</option>
            <option>One Month : 200DT</option>
            <option>Three Months : 500DT</option>
          </Form.Select>
          <Button variant="primary" onClick={handleClick}>
            Subscribe
          </Button>
        </InputGroup>
        <div className="paypal">
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <div className="paypalbutton">
              <PayPalButtons style={{ layout: "vertical" }} />
            </div>
          </PayPalScriptProvider>
        </div>
      </div>

      <img src={subscribeImage} alt="Subscribe" className="subscribeimg" />
      <section className="perfect-pitch-section">
        <h2 className="perfect-pitch-section__title">
          Pich Rental : Subscribe with a Click
        </h2>
        <p className="perfect-pitch-section__text">
          One month subscription for pitch rental for soccer players is an
          excellent option for those who want to enjoy the experience of playing
          on a professional field without making a long-term commitment. With a
          cost of 200 Dt per month, players can have access to a well-maintained
          playing surface and can train and play whenever they want. This type
          of subscription is also ideal for teams with a busy schedule that
          cannot commit to a longer subscription.
        </p>

        <p className="perfect-pitch-section__text">
          On the other hand, a three-month subscription for pitch rental service
          can be a cost-effective option for players who want to commit to a
          longer-term subscription. With a cost of 500 Dt for three months,
          players can enjoy premium playing surfaces for a more extended period,
          allowing them to train and play at their convenience. A three-month
          subscription is also ideal for teams that have a more extended season
          and need consistent access to a professional playing field. Overall, a
          three-month subscription can provide significant savings compared to
          monthly subscriptions, making it an excellent option for dedicated
          players and teams.
        </p>
      </section>
    </div>
  );
};

export default Subscribe;
