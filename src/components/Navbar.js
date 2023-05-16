import React from "react";
import "./Navbar.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <div className="nav">
      <div className="leftside">
        <h6 className="title">EDYODA</h6>
        <p className="navbartitle">Courses</p>
        <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
        <p className="navbartitle">Programs</p>
        <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
      </div>
      <div className="rightside">
      <p className="navbartitle1"><SearchIcon fontSize="large"></SearchIcon></p>
        <p className="navbartitle1">Login</p>
        <button type="submit">Join Now</button>
      </div>
    </div>
  );
}

export default Navbar;
