import React, { Component } from "react";
import "../../Style/buttonNavbar.css";

const ButtonDropdown = (props) => {
  const { dropdownName, dropdown1, dropdown2, dropdownEvent1, dropdownEvent2 } =
    props;
  return (
    <React.Fragment>
      <li className="collapse navbar-collapse">
        <div className="dropdown">
          <a
            className="dropdown-toggle buttonNavbar"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {dropdownName}
          </a>

          <ul
            className="dropdown-menu dropdown-menu-end menudrop"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <a className="dropdown-item" onClick={dropdownEvent1}>
                {dropdown1}
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={dropdownEvent2}>
                {dropdown2}
              </a>
            </li>
          </ul>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ButtonDropdown;
