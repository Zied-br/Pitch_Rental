import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Subscription from "../../components/subscription/Subscription";
import { getSubscriptions } from "../../redux/Actions/subscriptionAction";
import "../SubscriptionList/subscriptionList.css";

const SubscriptionList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptions());
    // eslint-disable-next-line
  }, []);

  const subscriptions = useSelector(
    (state) => state.subscriptionsReducer.subscriptions
  );

  return (
    <div>
      <div>
        <h1>Subscriptions List</h1>
        {subscriptions
          .map((elem) => (
            <Subscription elem={elem} key={elem._id}></Subscription>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default SubscriptionList;
