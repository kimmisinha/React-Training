import React from 'react';
import PropTypes from 'prop-types';

const Elementcomponent = ({ elementProp }) => {
  console.log("elementProp",elementProp)

  return (
    <div>
      <h1>Pass in a component as a prop</h1>
      {elementProp}
    </div>
  );
};

Elementcomponent.propTypes = {
  elementProp: PropTypes.element.isRequired
};

export default Elementcomponent;
