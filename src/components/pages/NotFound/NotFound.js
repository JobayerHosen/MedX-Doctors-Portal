import React from "react";
import img404 from "../../../assets/404.svg";

const NotFound = () => {
  return (
    <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
      <img src={img404} alt="not found img" />
      <h1 className="title">Page Not Found</h1>
    </div>
  );
};

export default NotFound;
