import logo from './logo.svg';
import './App.css';
import User2 from './User2';
import { User, User_3 } from './User';
import { Usernew } from './Usernew';
import State from './FunctionalState';
import Usernew_2 from './ClassState';
import Student from './Student';
import Input from './Input';
import Toggle from './Toggle';
import Form from './Form'
function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <User></User>
      <User2></User2>
      <User_3></User_3>
      <Usernew></Usernew>
      <State></State>
      <Usernew_2></Usernew_2>
      <Input></Input>
      <Student name="kimmi" />
      <Toggle></Toggle>
      <Form></Form>
    </div>
  );
}

export default App;
