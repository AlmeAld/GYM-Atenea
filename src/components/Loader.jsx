import React from "react";
import loader from "../assets/Loader.svg";
import "./loader.scss";

function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="" className="loader-image" />
    </div>
  );
}

export default Loader;
