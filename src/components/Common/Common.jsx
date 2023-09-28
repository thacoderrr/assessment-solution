// eslint-disable-next-line no-unused-vars
import React from "react";
import { Field } from "formik";
import PropTypes from "prop-types";

const InputField = ({ name, type, placeholder, err, ...rest }) => {
  return (
    <div className={`input-container ${err ? "input-error" : "input-default"}`}>
      <Field
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`p4 ${err ? "error" : "secondary"}`}
        {...rest}
      />
      {placeholder && (
        <label
          htmlFor={name}
          className={`p4 input-label ${err ? "error" : "placeholder"}`}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  err: PropTypes.bool,
};
export default InputField;

export const TextField = ({ name, placeholder, err, ...rest }) => {
  return (
    <div
      className={`textField_container ${
        err ? "textField_error" : "textField_default"
      }`}
    >
      <Field
        name={name}
        as="textarea"
        placeholder={placeholder}
        className={`p4 ${err ? "error" : "secondary"}`}
        {...rest}
      />
      {placeholder && (
        <label
          htmlFor={name}
          className={`p4 textField__label ${err ? "error" : "placeholder"}`}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  err: PropTypes.bool,
};
