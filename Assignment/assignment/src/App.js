import React from 'react';
import './App.css';
// import ClassMounting from './Component/ClassMounting';
import FunctionalMounting from './Component/FunctionalMounting';

function App() {
  const userName = 'John Doe';
  const userAge = 30;

  return (
    <div className="App">
      {/* <ClassMounting data={[userName, userAge]} /> */}
      <FunctionalMounting />
    </div>
  );
}

export default App;
