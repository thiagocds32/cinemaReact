import React, { Component } from "react";
import "../../Style/popUpStyle.css";
import "../../Style/closeButtonPopUpStyle.css";

const Popup = (props) => {
  const { closePopUp } = props;
  return props.trigger ? (
    <React.Fragment>
      <div onClick={() => closePopUp(false)} className="popUp-Container"></div>
      <div className="popUp">
        <div onClick={() => closePopUp(false)} class="close-container">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
        {props.children}
      </div>
    </React.Fragment>
  ) : (
    ""
  );
};

export default Popup;
