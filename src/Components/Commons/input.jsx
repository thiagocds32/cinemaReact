import React from "react";

const Input = ({
  type,
  name,
  placeholder,
  className,
  onChange,
  defaultValue,
  error,
  label,
  onFocus,
  onBlur,
}) => {
  return (
    <>
      {!type === "checkbox" && label && <label htmlFor={name}>{label}</label>}
      <input
        onChange={onChange}
        type={type}
        className={className}
        defaultValue={defaultValue}
        name={name}
        id={name}
        placeholder={label && error ? error : placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {type === "checkbox" && label && <label htmlFor={name}>{label}</label>}
      {(!label || type === "checkbox") && error && (
        <p className="controllerError" id="errorNome">
          {error}
        </p>
      )}
    </>
  );
};

export default Input;
