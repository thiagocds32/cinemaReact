import React, { Component } from "react";
import Input from "./input";
import Joi from "joi";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    const errors = { ...this.state.error };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = Joi.object({ [name]: this.schema.extract(name) });
    const { error } = schema.validate(obj);

    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  validate = () => {
    const result = this.schema.validate(this.state.data, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  renderInput = (
    type,
    name,
    placeholder,
    className,
    label,
    onFocus,
    onBlur,
    onChange = this.handleChange
  ) => {
    const { errors, data } = this.state;
    return (
      <Input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        defaultValue={data[name]}
        name={name}
        className={className}
        label={label}
        error={errors[name]}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  };

  renderButton = (nameId, label) => {
    return (
      <button name={nameId} id={nameId}>
        {label}
      </button>
    );
  };
}

export default Form;
