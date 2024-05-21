import React from 'react';
import './App.css';
import ClassMounting from './Component/ClassMounting';
import FunctionalMounting from './Component/FunctionalMounting';
import Events from './Component/Events';
function App() {
  const userName = 'John Doe';
  const userAge = 30;

  return (
    <div className="App">
      <ClassMounting data={[userName, userAge]} />
      <FunctionalMounting />
      <Events/>
    </div>
  );
}

export default App;
