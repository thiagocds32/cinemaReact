import React, { Component } from "react";
import "../Style/loginPopUpStyle.css";

import Form from "./Commons/form";
import Joi from "joi";

class LoginPopUp extends Form {
  state = {
    data: {},
    errors: {},
  };

  schema = Joi.object().keys({
    username: Joi.string().required().messages({
      "any.required": "Username necessario!",
      "string.empty": "Username necessario!",
    }),
    password: Joi.string().required().messages({
      "any.required": "Password necessaria!",
      "string.empty": "Password necessaria!",
    }),
  });
  render() {
    return (
      <React.Fragment>
        <div class="accediContainer">
          <p id="accedi">Log In</p>
        </div>
        <div class="formLogin">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput(
              "text",
              "username",
              "Inserisci il tuo username",
              "formLoginContent",
              "Username",
              null,
              null,
              null
            )}

            {this.renderInput(
              "password",
              "password",
              "Inserisci la tua password",
              "formLoginContent",
              "Password",
              null,
              null,
              null
            )}

            <a href="">Hai dimenticato la password?</a>
            <div class="loginRequestButtonContainer">
              {this.renderButton("loginRequestButton", "Login")}
              <p>
                Non sei ancora registrato?{" "}
                <span id="registratiLink">Registrati</span>
              </p>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPopUp;
