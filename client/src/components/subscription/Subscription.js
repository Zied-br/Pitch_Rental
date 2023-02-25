import React from "react";
import { useDispatch } from "react-redux";
import { deleteSubscription } from "../../redux/Actions/subscriptionAction";
import "../subscription/subscription.css";

const Subscription = ({ elem }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSubscription(elem._id));
  };

  // Calculate the expiration date based on the subscription type
  const subscriptionType = elem.type;
  let expirationDate = new Date(elem.createdAt);
  if (subscriptionType === "One Month : 200DT") {
    expirationDate.setMonth(expirationDate.getMonth() + 1);
  } else if (subscriptionType === "Three Months : 500DT") {
    expirationDate.setMonth(expirationDate.getMonth() + 3);
  }
  console.log(expirationDate);

  return (
    <div className="subscription">
      <div className="card text-center">
        <div className="card-header">
          <h5>Subscriber : </h5>
          <h4>{elem.fullName}</h4>
        </div>

        <div className="card-body">
          <p className="labels">
            Email : {elem.email}
            <br></br> Phone Number : {elem.phoneNumber} <br></br> Code :
            {elem.code} <br></br> Type : {elem.type}
          </p>

          <button
            type="submit"
            className="btn btn-danger btn-block mb-4 subscriptiondelete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        {expirationDate < new Date() ? (
          <div className="card-footer  redfooter">Expired</div>
        ) : (
          <div className="card-footer greenfooter">Valid</div>
        )}
      </div>
    </div>
  );
};

export default Subscription;
