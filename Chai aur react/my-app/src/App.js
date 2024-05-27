import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassComponent from "./Component/ClassComponent";
import FunctionComponent from "./Component/FunctionComponent";
import JsxComponent from "./Component/JsxComponent";
import StateComponent from "./Component/StateComponent";
import PropComponent from "./Component/PropComponent";
import Events from "./Component/Events";
import Batching from "./Component/Batching";
import Keys from "./Component/Keys";
import Lists from "./Component/Lists";
import Conditional from "./Component/Conditional"; // Corrected import
import ControlledComponent from "./Component/ControlledComponent";
import UnControlledComponent from "./Component/UnControlledComponent";
import NavBar from "./Component/NavBar";
// import NotFound from './Component/NotFound'

function App() {
  const userName = "kimmi";
  const userAge = 9;
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ClassComponent />} />
          <Route path="/FunctionComponent" element={<FunctionComponent />} />
          <Route path="/JsxComponent" element={<JsxComponent />} />
          <Route path="/StateComponent" element={<StateComponent />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/PropComponent" element={<PropComponent name={userName} age={userAge} />} />
          <Route path="/Batching" element={<Batching />} />
          <Route path="/Keys" element={<Keys />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="/Conditional" element={<Conditional />} />
          <Route path="/ControlledComponent" element={<ControlledComponent />} />
          <Route path="/UnControlledComponent" element={<UnControlledComponent />} />
           {/* Catch-all route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
