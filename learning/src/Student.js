import React from 'react';

const Student = ({name}) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {name}
    </div>
  );
};

export default Student;
