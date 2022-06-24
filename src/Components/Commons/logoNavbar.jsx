import React, { Component } from "react";
import "../../Style/logoNavbar.css";
import { Link } from "react-router-dom";
const LogoNavbar = (props) => {
  return (
    <Link to="/" className="navbar-brand logoNavbar">
      {props.children}
    </Link>
  );
};

export default LogoNavbar;
