import logo from './logo.svg';
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import JsxComponent from './Component/JsxComponent';
import StateComponent from './Component/StateComponent'
import PropComponent from './Component/PropComponent';

function App() {
  const userName = 'John Doe';
  const userAge = 30;

  return (
    <div className="App">
      <ClassComponent />
      <FunctionComponent />
      <JsxComponent />
      <StateComponent />
      <h1>Welcome to the Props Example App</h1>
      <PropComponent name={userName} age={userAge} />
    </div>
  );
}

export default App;
