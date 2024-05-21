import React, { useState } from 'react';
import './App.css';
import ClassMounting from './Component/ClassMounting';
import FunctionalMounting from './Component/FunctionalMounting';

function App() {
  const userName = 'John Doe';
  const userAge = 30;
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <ClassMounting data={[userName, userAge]} />
      <FunctionalMounting name={value} />
      <button onClick={() => setValue(p => p + 1)}>Add</button>

    </div>
  );
}

export default App;
