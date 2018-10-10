import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ children, onClick, disabled, type }) => (
  <button className="Button" disabled={disabled} onClick={onClick} type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  onClick: null,
  disabled: false,
  type: "button"
};

export default Button;
