import React from 'react';
import './App.css';
import ClassMounting from './Component/ClassMounting';
import FunctionalMounting from './Component/FunctionalMounting';
import Events from './Component/Events';
import Batching from './Component/Batching';
import Keys from './Component/Keys';
import Lists from './Component/Lists'
function App() {
  const userName = 'John Doe';
  const userAge = 30;

  return (
    <div className="App">
      <ClassMounting data={[userName, userAge]} />
      <FunctionalMounting />
      <Events/>
      <Batching/>
      <Keys/>
      <Lists/>
    </div>
  );
}

export default App;
