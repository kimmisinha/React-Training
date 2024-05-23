import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import JsxComponent from './Component/JsxComponent';
import StateComponent from './Component/StateComponent'
import PropComponent from './Component/PropComponent';
import Events from './Component/Events';
import Batching from './Component/Batching';
import Keys from './Component/Keys';
import Lists from './Component/Lists';
import Conditional from './Component/Events';
import ControlledComponent from './Component/ControlledComponent';
import UnControlledComponent from './Component/UnControlledComponent'
function App() {
    const userName="kimmi";
    const userAge=9;
  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <JsxComponent />
      <StateComponent />
      <h1>Welcome to the Props Example App</h1>
      <PropComponent name={userName} age={userAge} />
      <Events/>
      <Batching/>
      <Keys/>
      <Lists/>
      <Conditional/>
      <ControlledComponent/>
      <UnControlledComponent/>
    </div>
  );
}

export default App;
