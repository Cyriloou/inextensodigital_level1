import React from "react";
import "./Checkbox.css";
import PropTypes from "prop-types";

// Checkbox component that get props label for display text, checked for status and callback fct onClick
function Checkbox({ label, checked, onClick }) {
  return (
    <div>
      <span className="checkbox-box" onClick={onClick}>
        <span style={{ visibility: checked ? "visible" : "hidden" }}>x</span>
      </span>{" "}
      {label}
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Checkbox;
