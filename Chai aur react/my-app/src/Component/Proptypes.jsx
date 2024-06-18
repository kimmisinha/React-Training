import React from "react";
import PropTypes from "prop-types";

const emailvalidation = (props, propName, componentName) => {
  const email = props[propName];
//   console.log("props",props, propName, componentName)
//   console.log("propName", propName, componentName)

//   console.log("componentName", componentName)

  if (!email) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a valid email.`
    );
  }
};
export default function Proptypes({ name, age, email }) {
  return (
    <div>
      <h2>hello</h2>
      <h2>{console.log(name, age, email)}</h2>
    </div>
  );
}

Proptypes.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: emailvalidation,
};
