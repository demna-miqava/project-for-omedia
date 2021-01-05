import React from "react";
import { AiFillHome } from "react-icons/ai";
import "./App.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <div className="error-message">
        <h3>Oops... this user does not exist.Return <Link to='/'>Home</Link></h3>
      </div>
      <Link to="/" className="btn">
        <AiFillHome />
      </Link>
    </div>
  );
};

export default Error;
