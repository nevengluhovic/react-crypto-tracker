import React from "react";
import spinner from "../spinner/SPINNER2.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img width={200} height={200} src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
