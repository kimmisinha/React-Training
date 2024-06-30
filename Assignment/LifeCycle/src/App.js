import './App.css';
import React, { useRef } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Conditional from './Component/Conditional'; 
import ClassLifeCycle from "./Component/ClassLifeCycle"
import Refs from './Component/Refs';
function App() {
  const childRef=useRef();
  const handleChangeText=()=>{
    if(childRef.current){
      childRef.current.changeText();
    }
  }
  return (
    <BrowserRouter>
    <div>
      <button onClick={handleChangeText}>Change text from parent </button>
    </div>
      <Routes>
        <Route path="/" element={<ClassLifeCycle />} />
        <Route path="/conditional" element={<Conditional />} /> 
        <Route path="/refs" element={<Refs ref={childRef} />} /> 
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
