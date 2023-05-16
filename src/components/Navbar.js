import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="leftside">
        <img className="logo" src="./images/EDYODA.png" alt="" />
        <p className="navbartitle">Courses</p>
        <p className="navbartitle">Programs</p>
      </div>
      <div className="rightside">
      <p className="navbartitle1">Search</p>
        <p className="navbartitle1">Login</p>
        <button type="submit">Join Now</button>
      </div>
    </div>
  );
}

export default Navbar;
