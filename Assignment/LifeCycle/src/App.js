import "./App.css";
import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conditional from "./Component/Conditional";
import Refs from "./Component/Refs";
import FunctionalLifeCycle from "./Component/FunctionalLifeCycle";
import ClassLifeCycle from "./Component/ClassLifeCycle";
function App() {
  const childRef = useRef();
  const handleChangeText = () => {
    if (childRef.current) {
      childRef.current.changeText();
    }
  };
  return (
    <BrowserRouter>
      <div>
        <button onClick={handleChangeText}>Change text from parent </button>
      </div>
      <Routes>
        <Route path="/" element={<Conditional />} />
        <Route path="/refs" element={<Refs ref={childRef} />} />
        <Route path="/functionalLifeCycle" element={<FunctionalLifeCycle />} />
        <Route path="/classLifeCycle" element={<ClassLifeCycle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
