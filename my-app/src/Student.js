import React from 'react';

const Student = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Student name="Alice" age={25} />
    </div>
  );
};

export default Student;
