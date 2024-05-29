import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassComponent from "./Component/ClassComponent";
import FunctionComponent from "./Component/FunctionComponent";
import JsxComponent from "./Component/JsxComponent";
import StateComponent from "./Component/StateComponent";
import PropComponent from "./Component/PropComponent";
import Events from "./Component/Events";
import Batching from "./Component/Batching";
import Keys from "./Component/Keys";
import Lists from "./Component/Lists";
import Conditional from "./Component/Conditional"; 
import ControlledComponent from "./Component/ControlledComponent";
import UnControlledComponent from "./Component/UnControlledComponent";
import NavBar from "./Component/NavBar";
import NotFound from "./Component/NotFound";
import PureComp from "./Component/PureComp";
import Formikvalidate from "./Component/Formikvalidate";
import Counter from "./Component/Counter";

import Counter1 from "./Component/Counter1";
import Counter2 from "./Component/Counter2";
import { useState } from "react";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const userName = "kimmi";
  const userAge = 9;
  return (
    <div className="App">
      { <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ClassComponent />} />
          <Route path="/FunctionComponent" element={<FunctionComponent />} />
          <Route path="/JsxComponent" element={<JsxComponent />} />
          <Route path="/StateComponent" element={<StateComponent />} />
          <Route path="/Events" element={<Events />} />
          <Route
            path="/PropComponent"
            element={<PropComponent name={userName} age={userAge} />}
          />
          <Route path="/Batching" element={<Batching />} />
          <Route path="/Keys" element={<Keys />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="/Conditional" element={<Conditional />} />
          <Route
            path="/ControlledComponent"
            element={<ControlledComponent />}
          />
          <Route
            path="/UnControlledComponent"
            element={<UnControlledComponent />}
          />
          <Route path="/PureComp" element={<PureComp />} />
          <Route path="/Formikvalidate" element={<Formikvalidate />} />
          <Route path="/Counter" element={<Counter />} />

           <Route path="*" element={<NotFound />} />
            
        </Routes>
      </Router> }
      <Counter1 name={counter1} />
      <button onClick={()=>setCounter1(counter1+5)}>Update1</button>
      <Counter2 name={counter2} />
      <button onClick={()=>setCounter2(counter2+10)}>Update2</button>

    </div>
  );
}

export default App;
