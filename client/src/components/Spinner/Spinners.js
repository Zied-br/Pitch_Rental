import React from "react";

import ClipLoader from "react-spinners/ClipLoader";
import "../Spinner/Spinner.css";
const override = {
  borderColor: "gray",
  width: "15px",
  borderWidth: "15px",
  opacity: "60%",
};
const Spinners = () => {
  return (
    <div className="sweet-loading">
      <div className="spin">
        <ClipLoader className="clipload" cssOverride={override} size={15} />
        <ClipLoader className="clipload" cssOverride={override} size={15} />
        <ClipLoader className="clipload" cssOverride={override} size={15} />
      </div>
    </div>
  );
};

export default Spinners;
