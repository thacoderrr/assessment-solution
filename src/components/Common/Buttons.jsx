// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Buttons = ({
  color,
  to,
  disable,
  hover,
  children,
  type,
  ...rest
}) => {
  // console.log(disabled)
  return (
    <>
      {(type == "btn" || type == "submit") && (
        <button
          disabled={disable}
          className={`btn btn__default ${
            disable ? "btn-disable" : ``
          } ${`btn__${color}`}  ${hover ? `btn-hover` : ""}`}
          {...rest}
        >
          {children}
        </button>
      )}
      {type == "link" && (
        <Link
          to={disable ? null : to}
          className={` btn__default ${
            disable ? "btn-disable" : `btn__${color}`
          }`}
          {...rest}
        >
          {children}
        </Link>
      )}
    </>
  );
};

Buttons.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  disable: PropTypes.bool,
  hover: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};
