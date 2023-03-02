import React from "react";
import "../Alert/Alert.css";
function Alert(props) {
  return (
    <div className="alert">
      <p className="text">{props.message}</p>
    </div>
  );
}

export default Alert;
