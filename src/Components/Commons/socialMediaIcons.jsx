import React, { Component } from "react";
import "../../Style/socialMediaIconsStyle.css";

const SocialMediaIcons = () => {
  return (
    <ul className="wrapper">
      <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span>
          <i className="fa fa-facebook-f"></i>
        </span>
      </li>
      <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <span>
          <i className="fa fa-twitter"></i>
        </span>
      </li>
      <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <span>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </span>
      </li>
      <li className="icon youtube">
        <span className="tooltip">Youtube</span>
        <span>
          <i className="fa fa-youtube-play"></i>
        </span>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
