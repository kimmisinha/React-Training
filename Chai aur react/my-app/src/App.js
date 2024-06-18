import "./App.css";
import ReactDOM from "react-dom/client";
// import HOC from "./Component/HOC/HOC";
// import teamAScore from './Component/HOC/Counters/TeamScore'
// const Hockey = HOC(teamAScore, "Hockey Game", "Team A", "Team B");
// const Football = HOC(teamAScore, "Football Game", "Team C", "Team D");

import GamesComponent from "./Component/GamesComponent";
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
import Axios from "./Component/Axios";
import AxiosPost from "./Component/AxiosPost";
import ChildA from "./Component/ChildA";
import Proptypes from "./Component/Proptypes";
import Elementcomponent from "./Component/Elementcomponent";
import { createContext } from "react";
const nestedprops = "kimmi";
function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const userName = "kimmi";
  const userAge = 9;
  const userEmail = "kimmi@example.com";

  return (
    <div className="App">
      {
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<ClassComponent />} />

            <Route path="/FunctionComponent" element={<FunctionComponent />}>
              <Route path="JsxComponent" element={<JsxComponent />} />
              <Route path="StateComponent" element={<StateComponent />} />
              <Route path="Events" element={<Events />} />
            </Route>

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
            <Route path="/pure-comp" element={<PureComp />} />
            <Route path="/formik-validate" element={<Formikvalidate />} />
            <Route path="/counter" element={<Counter />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/games-component" element={<GamesComponent />} />
            {/* Axios */}
            <Route path="/axios" element={<Axios />} />
            <Route path="/axios-post" element={<AxiosPost />} />

            <Route
              path="/proptypes"
              element={
                <Proptypes name={userName} age={userAge} email={userEmail} />
              }
            />
            <Route
              path="/element-component"
              element={
                <Elementcomponent
                  elementProp={<p>This is a paragraph passed as a prop!</p>}
                />
              }
            />
            
          <Route path="/child-a" element={<ChildA name={nestedprops} />} />
          </Routes>
        </Router>
      }

      {/* <div>
        <h2>Games</h2>
        <Hockey teamAScore={0} teamBScore={0} />
        <Football teamAScore={0} teamBScore={0} />
      </div> */}

      {/* <Counter1 name={counter1} />
      <button onClick={()=>setCounter1(counter1+5)}>Update1</button>
      <Counter2 name={counter2} />
      <button onClick={()=>setCounter2(counter2+10)}>Update2</button> */}
    </div>
  );
}

export default App;
