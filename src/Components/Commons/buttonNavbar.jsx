import React, { Component } from "react";
import "../../Style/buttonNavbar.css";
import { Link } from "react-router-dom";

const ButtonNavbar = (props) => {
  const { innerText, onLogin, onLogout, login, link } = props;
  return (
    <li>
      <Link
        onClick={login ? onLogout : onLogin}
        className="buttonNavbar"
        aria-expanded="false"
        to={link}
      >
        {innerText}
      </Link>
    </li>
  );
};

export default ButtonNavbar;
