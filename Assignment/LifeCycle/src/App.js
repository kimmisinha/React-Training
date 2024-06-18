import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClassMounting from './Component/ClassLifeCycle';
import FunctionalMounting from './Component/FunctionalLifeCycle';
import PureComponent from './Component/PureComponent';
import Refs from './Component/Refs';
import Conditional from './Component/Conditional'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassMounting />} />
        <Route path="/conditional" element={<Conditional />} /> 
        <Route path="/functional-mounting" element={<FunctionalMounting />} />
        <Route path="/pure-component" element={<PureComponent />} />
        <Route path="/refs" element={<Refs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
