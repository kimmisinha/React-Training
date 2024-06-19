import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conditional from './Component/Conditional'; 
import ClassLifeCycle from "./Component/ClassLifeCycle"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassLifeCycle />} />
        <Route path="/conditional" element={<Conditional />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
