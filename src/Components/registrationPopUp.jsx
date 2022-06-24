import React, { Component } from "react";
import "../Style/registrationPopUpStyle.css";
import Form from "./Commons/form";
import Joi from "joi";

class RegistrationPopUP extends Form {
  state = {
    data: {},
    errors: {},
    passwordControl: false,
    hidePassword: true,
    passwordControlers: {},
  };

  schema = Joi.object().keys({
    nomeRegistrazione: Joi.string()
      .pattern(/^[a-zA-Z]+$/)
      .min(2)
      .required()
      .empty("")
      .messages({
        "string.min": "Il nome deve avere almeno 2 caratteri!",
        "any.required": "Campo Obbligatorio!",
        "string.empty": "Campo Obbligatorio!",
        "string.pattern.base": "Numeri non sono ammessi nel nome!",
      }),

    cognomeRegistrazione: Joi.string()
      .required()
      .min(2)
      .empty("")
      .pattern(/^[a-zA-Z]+$/)
      .messages({
        "string.min": "Il cognome deve avere almeno 2 caratteri!",
        "any.required": "Campo Obbligatorio!",
        "string.empty": "Campo Obbligatorio!",
        "string.pattern.base": "Numeri non sono ammessi nel cognome!",
      }),

    emailRegistrazione: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .empty("")
      .messages({
        "any.required": "Campo Obbligatorio!",
        "string.empty": "Campo Obbligatorio!",
        "string.email": "Devi inserire un indirizzo mail valido con la @!",
      }),

    dataRegistrazione: Joi.date().required().empty("").messages({
      "any.required": "Campo Obbligatorio!",
      "string.empty": "Campo Obbligatorio!",
    }),

    usernameRegistrazione: Joi.string().required().min(3).empty("").messages({
      "string.min": "Username deve avere almeno 3 caratteri!",
      "any.required": "Campo Obbligatorio!",
      "string.empty": "Campo Obbligatorio!",
    }),
    passwordRegistrazione: Joi.string().required().empty("").messages({
      "string.min": "La password deve avere almeno 8 caratteri!",
      "any.required": "Campo Obbligatorio!",
      "string.empty": "Campo Obbligatorio!",
    }),

    confermaPasswordRegistrazione: Joi.any()
      .equal(Joi.ref("passwordRegistrazione"))
      .required()
      .empty("")
      .messages({
        "any.required": "Campo Obbligatorio!",
        "string.empty": "Campo Obbligatorio!",
        "any.only": "Le password devono essere uguali!",
      }),

    trattamentoDati: Joi.any().required().messages({
      "any.required": "Devi accettare il trattamento dei dati per prosseguire",
      "any.empty": "Devi accettare il trattamento dei dati per prosseguire",
    }),
  });

  handleChangePassword = (e) => {
    const input = e.currentTarget.value;
    const data = { ...this.state.data };
    data[e.currentTarget.name] = input;
    this.setState({ data });

    let passwordControlers = {};

    let lowerCaseLetters = /[a-z]/g;
    e.currentTarget.value.match(lowerCaseLetters)
      ? (passwordControlers.lowerCase = true)
      : (passwordControlers.lowerCase = false);

    let upperCaseLetters = /[A-Z]/g;
    e.currentTarget.value.match(upperCaseLetters)
      ? (passwordControlers.upperCase = true)
      : (passwordControlers.upperCase = false);
    let numbers = /[0-9]/g;
    e.currentTarget.value.match(numbers)
      ? (passwordControlers.numbers = true)
      : (passwordControlers.numbers = false);
    e.currentTarget.value.length >= 8
      ? (passwordControlers.minLength = true)
      : (passwordControlers.minLength = false);

    this.setState({ passwordControlers });
  };

  changeDataType = (e) => {
    e.currentTarget.type === "text"
      ? (e.currentTarget.type = "date")
      : (e.currentTarget.type = "text");
  };

  passwordControls = () => {
    let passwordControl = this.state.passwordControl;
    passwordControl === false
      ? (passwordControl = true)
      : (passwordControl = false);
    this.setState({ passwordControl });
  };

  handleHidePass = () => {
    let hidePassword = this.state.hidePassword;
    hidePassword === true ? (hidePassword = false) : (hidePassword = true);
    this.setState({ hidePassword });
  };
  render() {
    const { lowerCase, upperCase, numbers, minLength } =
      this.state.passwordControlers;
    return (
      <React.Fragment>
        <p id="registerHeader">Registrati Ora</p>

        <form onSubmit={this.handleSubmit}>
          <div className="registrationForm">
            {this.renderInput("text", "nomeRegistrazione", "Nome")}
          </div>
          <div className="registrationForm">
            {this.renderInput("text", "cognomeRegistrazione", "Cognome")}
          </div>

          <div className="registrationForm">
            {this.renderInput("text", "emailRegistrazione", "Indirizzo e-mail")}
          </div>

          <div className="registrationForm">
            {this.renderInput(
              "text",
              "dataRegistrazione",
              "Data di Nascita",
              null,
              null,
              this.changeDataType,
              this.changeDataType
            )}
          </div>

          <div className="registrationForm">
            {this.renderInput("text", "usernameRegistrazione", "Username")}
          </div>

          {
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }

          <div className="registrationForm">
            {this.renderInput(
              this.state.hidePassword === true ? "password" : "text",
              "passwordRegistrazione",
              "Password",
              null,
              null,
              this.passwordControls,
              this.passwordControls,
              this.handleChangePassword
            )}

            <i
              className={
                this.state.hidePassword === true
                  ? "fa fa-eye enabled"
                  : "fa fa-eye"
              }
              onClick={this.handleHidePass}
              id="hidePass"
            ></i>
            <i
              className={
                this.state.hidePassword === false
                  ? "fa fa-eye-slash enabled"
                  : "fa fa-eye-slash"
              }
              onClick={this.handleHidePass}
              id="seePass"
            ></i>
          </div>

          <div
            className={
              this.state.passwordControl === true
                ? "registrationForm enabled"
                : "registrationForm"
            }
            id="passwordControls"
          >
            <p id="devonoContenere">La password deve contenere almeno:</p>
            <p
              id="letMaiuscola"
              className={upperCase === true ? "corretta" : "sbagliato"}
            >
              •Una lettera maiuscola
              <i
                className={
                  upperCase === true
                    ? "fa fa-check-circle enabled"
                    : "fa fa-check-circle"
                }
              ></i>
              <i
                className={
                  !upperCase === true
                    ? "fa fa-times-circle enabled"
                    : "fa fa-times-circle"
                }
              ></i>
            </p>
            <p
              id="letMinuscola"
              className={lowerCase === true ? "corretta" : "sbagliato"}
            >
              • Una lettera minuscola
              <i
                className={
                  lowerCase === true
                    ? "fa fa-check-circle enabled"
                    : "fa fa-check-circle"
                }
              ></i>
              <i
                className={
                  !lowerCase === true
                    ? "fa fa-times-circle enabled"
                    : "fa fa-times-circle"
                }
              ></i>
            </p>
            <p
              id="letNumero"
              className={numbers === true ? "corretta" : "sbagliato"}
            >
              • Un numero
              <i
                className={
                  numbers === true
                    ? "fa fa-check-circle enabled"
                    : "fa fa-check-circle"
                }
              ></i>
              <i
                className={
                  !numbers === true
                    ? "fa fa-times-circle enabled"
                    : "fa fa-times-circle"
                }
              ></i>
            </p>
            <p
              id="let8caratteri"
              className={minLength === true ? "corretta" : "sbagliato"}
            >
              • Almeno 8 caratteri
              <i
                className={
                  minLength === true
                    ? "fa fa-check-circle enabled"
                    : "fa fa-check-circle"
                }
              ></i>
              <i
                className={
                  !minLength === true
                    ? "fa fa-times-circle enabled"
                    : "fa fa-times-circle"
                }
              ></i>
            </p>
          </div>
          {
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          }
          <div className="registrationForm">
            {this.renderInput(
              this.state.hidePassword === true ? "password" : "text",
              "confermaPasswordRegistrazione",
              "Conferma Password"
            )}
          </div>

          <div className="registrationForm">
            <div id="datiCheck">
              {this.renderInput(
                "checkbox",
                "trattamentoDati",
                null,
                null,
                `Autorizzo il trattamento dei miei dati a seguito
                ${(
                  <a href="">
                    dell'informativa sul trattamento dei dati personali
                  </a>
                )}
                , in osservanza dell'art. 13 del Regolamento UE 2016/679
                "Protezione delle persone fisiche con riguardo al trattamento
                dei dati personali, nonché alla libera circolazione di tali
                dati"`
              )}
            </div>
          </div>

          <div className="registrationForm">
            {this.renderButton("registrationButton", "Registrati")}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationPopUP;
